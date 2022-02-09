import React, {Component} from 'react';
import Banner from './newLanding/banner';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      product_item: [
        {id: 1, title: "Black Forest Cake", description: 'Black Forest gâteau or Black Forest cake is a chocolate sponge cake with a rich cherry filling based on the German dessert Schwarzwälder Kirschtorte, literally "Black Forest Cherry-torte". Typically, Black Forest gateau consists of several layers of chocolate sponge cake sandwiched with whipped cream and cherries.', active: false},
        {id: 2, title: 'Peach Fluffy Cheese Cake', description: 'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.', active: false},
        {id: 3, title: 'Ube & Macapuno Cake', description: "Ube cake is generally prepared identically to mamón (chiffon cakes and sponge cakes in Filipino cuisine), but with the addition of mashed purple yam to the ingredients. It is typically made with flour, eggs, sugar, a dash of salt, baking powder, vanilla, oil, milk, and cream of tartar.", active: false},
        {id: 4, title: 'Triple Chocolate Cake', description: 'Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both', active: false},

      ]
    }
  }

  handleChange(item, event){
    event.preventDefault()

    let product_item = [...this.state.product_item]

    product_item.map( data => {
      data.active = false
    })

    item.active = !item.active

    product_item[item.id - 1] = item

    this.setState({product_item})
  }


  render() {
    return (
      <div>
       <Banner />
        {/* <h1>hello react</h1> */}
      </div>
    )
  }
};

export default Landing;
