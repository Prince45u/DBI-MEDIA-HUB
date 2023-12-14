import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo-div">

        </div>

        <div className="links-div">
          <Link to="/termsofuse">Terms of use</Link>
        </div>
    </div>
  )
}

export default Navbar