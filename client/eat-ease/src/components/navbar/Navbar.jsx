import React, { useContext } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const Navbar = ({ type }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">EatEase</span>
        </Link>
        <div className="navItems">
          {type !== 'login' && type !== 'register' ?
            <>
            {user ? <><span>{user.username}</span><button className="navButton">Logout</button></> : <><button className="navButton">Register</button>
              <button className="navButton">Login</button></>}
              
            </> :
            type == 'login' ? <><span>Not registered yet?</span> <button className="navButton">Register</button></> : <><span>Already registered?</span> <button className="navButton">Login</button></>
          }
        </div>
      </div>
    </div>
  )
}
