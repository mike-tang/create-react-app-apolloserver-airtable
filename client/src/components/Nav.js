import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Candice & Mike
      </Link>
    </nav>
  )
}

export default Nav;