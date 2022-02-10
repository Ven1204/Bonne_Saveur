import React,  { Component } from 'react';
import ActiveList from './activeList';


class List extends Component {

  state  = {

  }
  // event when clicked the divs will  show the active list on the right
  handleClick = () => {
    <ActiveList />
  }

  render(){
    return(
      <div >
        {/* div for the menu of products */}
        <h1>Our Products</h1>
        <div className='row'>
          <div className='col-4' style={{cursor: 'pointer'}}>
            <div>
              <div onClick={this.handleClick} style={{backgroundColor: 'blue'}}>
                <h1>Cakes</h1>
              </div>
              <div onClick={this.handleClick} style={{backgroundColor: 'green'}}>
                <h1>Candies</h1>
              </div>
              <div onClick={this.handleClick} style={{backgroundColor: 'orange'}}>
                <h1>Breads</h1>
              </div>
              <div onClick={this.handleClick} style={{backgroundColor: 'red'}}>
                <h1>Others</h1>
              </div>
            </div>
          </div>
        {/* div for the cards  */}
          <div className="col-8">
            {/* <ActiveList /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
