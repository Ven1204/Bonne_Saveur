// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '../components/landing'
// import Navbar from '../components/navbar/navbar'
// import Footer from '../footer/footer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Landing/>,
    document.body.appendChild(document.createElement('div')),
  )
})
