import React, { Component } from 'react';


function Article({ title, abstract, byline, image, created_date }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{created_date}</p>
            <h2>{byline || null}</h2>
            {image ? <img src={image} alt="related" /> : null}
            <p>{abstract}</p>
        </div>
    )
}




export default Article;
