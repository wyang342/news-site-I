import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class HomeContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Home">
        <Grid>
          <Row className="show-grid">
            <Col xs={1}><h1>News</h1></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  news: React.PropTypes.object
}

export default HomeContainer;
