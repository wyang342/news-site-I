import React, { Component } from 'react';
import News from '../data/news.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: News
    }
  }
  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          news: this.state.news
        })}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App;