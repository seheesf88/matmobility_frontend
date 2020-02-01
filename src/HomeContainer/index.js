import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomeContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h1>Mat Mobility</h1>
        <Link to="/sample">Check</Link>
      </div>
    )
  }
}

export default HomeContainer
