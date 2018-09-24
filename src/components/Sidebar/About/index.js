import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Software Engineer ∙ Open Sourcerer ∙ Tech Enthusiast
          <div className="emoji">
          👨🏽‍💻 &nbsp; 😍 &nbsp; 🤖
          </div>
        </div>
      </div>
    )
  }
}

export default About