import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from "../firebaseConfig"

export default function Articles() {
    const [articles, setarticles]=useState([]);
    useEffect(()=>{
        const articleRef =collection(db, "Articles");
        const q=query(articleRef,orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot)=>{
            const articles = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),

            }));
            setarticles(articles);
            console.log(articles);
        });
    },[]);
  return (
    <div>
        {articles.length===0?(
                <p>No Articles found</p>
            ):(
                articles.map((id,title,createdAt,imageUrl,description)=>(
                    <div className='border mt-3 p-3 bg-light-gray' key={id} style={{width: '21rem' }}>
                     
                       <div class="card" style={{ margin: 5,width: '18rem' }}>
                        <img src={imageUrl} class="card-img-top" alt="title"></img>
                        <div class="card-body">
                            <h5 class="card-title"> {title}</h5>
                            <p class="card-text">{description}</p>
                      
                        </div>
                        </div>
                    </div>
                    
                
                ))
                
            )
        }
    </div>
  )
}
