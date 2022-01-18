import React, {Component} from 'react';
import classes from './landing.module.css';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Tables from './tables/tables'
import NameForm from './form/form';
import Basket from '../components/basket/basket'
import Clock from './clocks/Clock';


class Landing extends Component {
  constructor() {
    super()
    this.state = {
      course_modules: [
        {id: 1, title: "Hors d'Oeuvres", description: 'A small savoury dish, typically one served as an appetizer.', active: false},
        {id: 2, title: 'Soupe', description: 'A liquid dish, typically savoury and made by boiling meat, fish, or vegetables etc. in stock or water.', active: false},
        {id: 3, title: 'Plat Principal', description: "A main course is the featured or primary dish in a meal consisting of several courses. It usually follows the entrée ('entry')/ Hors d'oeuvres course.", active: false},
        {id: 4, title: 'Le Dessert', description: 'The sweet course eaten at the end of a meal.', active: false},

      ]
    }
  }

  handleChange(item, event){
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
        {/* <Navbar />, */}
        <Clock />,
        <Basket />,
        <Tables handleChange={this.handleChange.bind(this)} course_modules={this.state.course_modules} />,
        <Footer />,

      </div>
    )
  }
};

export default Landing;
