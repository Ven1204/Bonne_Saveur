import React,  { Component } from 'react';
import activeList from './activeList';


export class List extends Component {

  render(){

  const handleClick = () => {
    <activeList />
  }

  return(
    <div className="col col-sm-12">
      <h1>Our Products</h1>

      <div onClick={this.handleClick} style={{backgroundColor: 'blue'}}>
        <h1>Cakes</h1>
      </div>
      <div onClick={handleClick} style={{backgroundColor: 'green'}}>
        <h1>Candies</h1>
      </div>
      <div onClick={handleClick} style={{backgroundColor: 'orange'}}>
        <h1>Breads</h1>
      </div>
      <div onClick={handleClick} style={{backgroundColor: 'red'}}>
        <h1>Others</h1>
      </div>
    </div>
  );
  }


}
