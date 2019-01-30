import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><h6>Daniel Munoz</h6></Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="">Hello</Link>
    </div>
  </div>
)

export default Header
