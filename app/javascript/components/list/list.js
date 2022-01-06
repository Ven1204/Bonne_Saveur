import React, {Component} from 'react';
import CourseList from './courseList';


const List = (props) => {
  return(
    <div className='row pt-4 pb-4' onClick={props.handleChange}>
      <div className='col-md-10 offset-md-1' style={{cursor:'pointer'}}>
        <div className='text-center'>
          <div className='card px-5'>
            <div className='pt-4 pb-4'>
              <h4>{props.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
