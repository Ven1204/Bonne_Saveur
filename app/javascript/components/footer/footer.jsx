import React from 'react';

  const Footer = () => {
    return (
      <section className="home-section-4--footer">
        <div className='col col-sm-12' style={{backgroundColor: 'white'}}>
          <div className='pt-4 mt-4 ' >
            <div>
              Bonne Saveur®
            </div >
            <div className='row row-sm-12'>
              <div className='ml-1 mr-1'>
                <i className="fab fa-facebook"></i>
              </div>
              <div className='ml-1 mr-1'>
                <i className="fab fa-instagram-square"></i>
              </div>
              <div className='ml-1 mr-1'>
                <i className="fab fa-twitter-square"></i>
              </div>
              <div className='ml-1 mr-1'>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }



export default Footer;
