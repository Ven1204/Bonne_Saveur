import React, {Component} from 'react';
import classes from './landing.module.css';

class Landing extends Component {
  render() {
    return (
      <div className={classes.container}>
      <h1>Welcome to Bonne Saveur!</h1>
      <h2>This is a banner</h2>
      </div>

    )
  }
};

export default Landing;
