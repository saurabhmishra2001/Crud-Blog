import React from "react";
import DeleteArticle from "./DeleteArticle";
const Blog = ({
  post: { title, description, imageUrl, createdAt, id },
  index,
}) => {
  return (
    <div className="container my-3" style={{ margin: 0, width: "33%" }}>
      <div className="card" style={{ margin: 1, width: "20rem" }} key={id}>
        <img src={imageUrl} className="card-img-top" alt="title"></img>
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{description}</p>
          <p>Creater At {createdAt.toDate().toDateString()}</p>
          <DeleteArticle id={id} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
