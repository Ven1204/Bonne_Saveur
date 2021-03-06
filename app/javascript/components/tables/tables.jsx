import React, {Component} from  'react';
import List from '../list/list'
import ActiveList from '../list/activeList';

class Tables extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const lists = this.props.product_item.map((data) =>{
      let handleChange = this.props.handleChange.bind(this, data)
      return (
        data.active ?
        <ActiveList handleChange={handleChange} key={data.id} title={data.title} description={data.description} /> :
        <List handleChange={handleChange} key={data.id} title={data.title} description={data.description} />
      )
    })

    return(
      <div className='pt-5 pb-5'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='pt-4 pb-4'>Our Products</h2>
          </div>
          <div>
            {lists}
          </div>
        </div>
      </div>
    )
  }
}

export default Tables;
