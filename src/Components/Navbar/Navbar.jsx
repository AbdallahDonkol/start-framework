import React, { useEffect } from 'react'
import {Link,NavLink} from 'react-router-dom';

export default function Navbar() {
 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark p-4 sticky-top" style={{backgroundColor:"#2c3e50"}}>
  <div className="container">
    <Link className="navbar-brand text-uppercase" to=""><h1>Start Framework</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white fw-bold px-4" activeclassname="active" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white fw-bold px-4" activeclassname="active" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white fw-bold px-4" activeclassname="active" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
