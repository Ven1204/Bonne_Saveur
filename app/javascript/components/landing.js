import React, {Component} from 'react';
import classes from './landing.module.css';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />,
        <Footer />
      </div>
    )
  }
};

export default Landing;
