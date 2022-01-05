import React, {Component} from  'react';
import List from '../list/list'
import ActiveList from '../list/activeList';

class Tables extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const lists = this.props.course_modules.map((data) =>{
      let handleVideoChange = this.props.handleVideoChange.bind(this, data)
      return (
        data.active ?
        <ActiveList handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} /> :
        <List handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} />
      )
    })

    return(
      <div className='pt-5 pb-5'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='pt-4 pb-4'>Full Course Products</h2>
          </div>

          {lists}
        </div>
      </div>
    )
  }
}

export default Tables;
