import React, {Component} from 'react';
import Banner from './newLanding/banner';

import Clock from '../components/clocks/Clock';
import Footer from '../components/footer/footer';
import List from '../components/list/list';

class Landing extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Banner />
        <List />
        <Footer />
        {/* <h1>hello react</h1> */}
      </div>
    )
  }
};

export default Landing;
