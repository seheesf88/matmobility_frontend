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
        <li><Link to="/sample">sample1</Link></li>
        <li><Link to="/sampletwo">sample2</Link></li>
      </div>
    )
  }
}

export default HomeContainer
