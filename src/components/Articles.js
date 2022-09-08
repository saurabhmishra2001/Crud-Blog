import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";

import DeleteArticle from "./DeleteArticle";

const css = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {articles.length === 0 ? (
          <p>No articles found!</p>
        ) : (
          articles.map(({ id, title, description, imageUrl, createdAt }) => (
            <div style={css.grid}>
              <div className="container my-4">
                <div className="row">
                  <div
                    className="card"
                    style={{ margin: 1, width: "20rem" }}
                    key={id}
                  >
                    <img
                      src={imageUrl}
                      className="card-img-top"
                      alt="title"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title"> {title}</h5>
                      <p className="card-text">{description}</p>
                      <p>Creater At {createdAt.toDate().toDateString()}</p>
                      <DeleteArticle id={id} imageUrl={imageUrl}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
