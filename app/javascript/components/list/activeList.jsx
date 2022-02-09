import React, { Component } from 'react';

class ActiveList extends Component{
  render(){
    return(
        <div className="col col-sm-12">
          <h1>Our Products</h1>

          <div style={{backgroundColor: 'blue'}}>
            <h1>Cakes</h1>
            <h2>asdgjhkjhsafhf</h2>
          </div>
          <div style={{backgroundColor: 'green'}}>
            <h1>Candies</h1>
          </div>
          <div style={{backgroundColor: 'orange'}}>
            <h1>Breads</h1>
          </div>
          <div style={{backgroundColor: 'red'}}>
            <h1>Others</h1>
          </div>
        </div>
      );
  }
}
