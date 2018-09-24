import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/Shriram-Balaji" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/__shriram" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/shrirambalaji" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:shrirambalaji1996@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links