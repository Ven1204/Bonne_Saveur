import React, {Component} from 'react';
import styled from 'styled-components';
import Clock from '../clocks/Clock';



class Basket extends Component {
    state = {
      divcontainer:true,
    }

  render() {

    var hideBanner = e => {
      this.setState({divcontainer:!this.state.divcontainer});
    }

    const register = () => {
      alert("Welcome to Bonne Saveur!!")
    }

    const x = this.state.divcontainer;
    return(

      <div className='bg-white'>
        <div className='d-flex align-center'>
          <img onClick={hideBanner} src={"https://res.cloudinary.com/rvnsllrry/image/upload/v1640625987/Bonne_Saveur_-_logo_q2qg53.png"} width="60" height="40" alt="Bonne Saveur logo" />
          <Clock />
        </div>
        { x && (
          <div>
            <Section className="home-section--1">
              <div className="banner">
                <div className='row'>
                  <div className='col col-sm-12 col-md-5'>
                    <div className='pt-4 mt-4 text-center'>
                      <Heading>Bonne Saveur</Heading>
                      <Subheading>Savor every moment.</Subheading>
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
          </div>)
        }
      </div>

    )
  }
};

export default Basket;


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
