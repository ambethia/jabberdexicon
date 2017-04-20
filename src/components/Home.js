import React, { Component } from 'react'
import jabberwocky from '../images/jabberwocky.png'

class Home extends Component {
  render () {
    return <div className='Home'>
      <h2>Welcome to The Jabberdexicon</h2>
      <img src={jabberwocky} alt='The Jabberwocky' />
      <h3>A little glossary of jargon</h3>
    </div>
  }
}

export default Home
