import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='pt-3 pb-3'>
        <div className='container'>
          <div className='text-left'>
            <h3 style=''>Bonne Saveur®</h3>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-youtube"></i>
          </div>
        </div>

      </div>
    )
  }
};


export default Footer;
