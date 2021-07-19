import React, { Component } from 'react';

function ArticleTeaser({ id, title, created_date, handleTitleClick }) {
    return (
        <div>
            <a onClick={(event) => {
                handleTitleClick(id);
                event.preventDefault();
            }}>
                {title}
            </a>
            <p>{created_date}</p>
        </div>
    )
}



export default ArticleTeaser;
