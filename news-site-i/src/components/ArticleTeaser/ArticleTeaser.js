import React, { Component } from 'react';

class ArticleTeaser extends Component {
    render() {
        const { id, title, created_date, handleTitleClick } = this.props;  // destructuring props

        return (
            <div>
                <a onClick={() => handleTitleClick(id)}>{title}</a>
                <p>{created_date}</p>
            </div>
        )
    }
}

export default ArticleTeaser;
