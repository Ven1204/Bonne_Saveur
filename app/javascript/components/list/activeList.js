import React, {Component} from 'react';
import Product_info from './product_info'


const activeList = (props) => {
  return(
    <div className='row pt-4 pb-4'>
      <div className='col-md-10 offset-md-1'>
        <div className='text-center'>
          <div className='card px-5'>
            <div className='row'>
              <div className='col-md-10 offset-md-1'>

              <div className='pt-4 pb-4'>
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className='cta-wrapper'>
                    <a className='btn cta-btn'>Voir notre - {props.title}</a>
                      {/* {This should render you to page where you can see all the library of the product chosen} */}
                      <Product_info />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default activeList;
