import React, {Component} from 'react';
import styled from 'styled-components';
import Tables from '../tables/tables'


class Navbar extends Component {
  render() {

    const hideBanner = () => {
      // This will hide the banner
    }

    const register = () => {
      alert("Welcome to Bonne Saveur!!")
    }

    return(
    <Section className="home-section--1">
      <div className="banner">
        <div className='row'>
          <div className='col col-sm-12 col-md-5'>
            <div className='pt-4 mt-4 text-center'>
              <Heading>Bonne Saveur</Heading>
              <Subheading>Show us your creative side</Subheading>
              <div className='cta-wrapper'>
                <Start onClick={hideBanner} className='btn start-btn'>Savourer l'Expérience</Start>
              </div>
              <div className='cta-wrapper'>
                <Register onClick={register} className='btn register-btn'>Join us</Register>
              </div>
            </div>
          </div>
          <div className='col col-sm-12 col-md-7'>
            <div className='pt-4 mt-4 text-center'>
              {/* <iframe width="560" height="315" src="https://gifer.com/embed/8Nuh" frameborder="0"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
    )
  }
};

export default Navbar;


// Styles

const Section = styled.section`
  background: linear-gradient(#ab68ca, #de67a3);
  min-height: 550px;
  padding: 80px 50px;
  color: #fff;
`
const Heading = styled.h1`
  font-family: Redressed, cursive;
  font-size: 80px;
  font-weight: 700;
`
const Subheading = styled.h3`
  font-family: Redressed, cursive;
  font-size: 40px;
`
const Start = styled.a`
  height: 40px;
  width: 180px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(#ab68ca, #de67a3);
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  box-shadow: 0px 0px 4px 1px #fff;
`
const Register = styled.a`
  height: 40px;
  width: 180px;
  border: none;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
const Hide = styled.section`
  display: none;
`
