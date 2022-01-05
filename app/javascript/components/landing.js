import React, {Component} from 'react';
import classes from './landing.module.css';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Tables from './tables/tables'



class Landing extends Component {
  constructor() {
    super()
    this.state = {
      course_modules: [
        {id: 1, title: "Hors d'oeuvres", description: 'lorem ipsum', active: false},
        {id: 2, title: 'Soupe', description: 'lorem ipsum', active: false},
        {id: 3, title: 'Plat Principal', description: 'lorem ipsum', active: false},
        {id: 4, title: 'Le Dessert', description: 'lorem ipsum', active: false},
        {id: 5, title: 'title3', description: 'lorem ipsum', active: false},
        {id: 6, title: 'title4', description: 'lorem ipsum', active: false},
      ]
    }
  }

  handleVideoChange(item, event){
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map( data => {
      data.active = false
    })

    item.active = !item.active

    course_modules[item.id - 1] = item

    this.setState({course_modules})
  }


  render() {
    return (
      <div>
        <Navbar />,
        <Tables handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules} />,
        <Footer />,

      </div>
    )
  }
};

export default Landing;
