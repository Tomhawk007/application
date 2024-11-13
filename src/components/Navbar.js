import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">{props.profile}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">{props.savedPosts}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">{props.analytics}</Link>
        </li>
        
        <li className="nav-item dropdown" data-bs-theme="light">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select yourself as
          </Link>
          <ul className="dropdown-menu" >
            <li><Link className="dropdown-item" href="/">Startup Owner</Link></li>
            <li><Link className="dropdown-item" href="/">Angel Investor</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">{props.setting}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">{props.subs}</Link>
        </li>


        {/* <li className="nav-item">
        {/* // eslint-disable-next-line */}
          {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */} 
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
 
//setting proptype for my first prop which is "title" in my case
Navbar.propTypes={title: PropTypes.string.isRequired}

//if we mistakenly forgot to put values for our props in app.js file then this default will work
// Navbar.defaultProps = {title:'Ushereel', profile:'Profile',
//     savedPosts:'Saved Posts', analytics:'Analytics'};