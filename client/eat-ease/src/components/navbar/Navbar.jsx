import React, { useContext } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const Navbar = ({ type }) => {
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">EatEase</span>
        </Link>
        <div className="navItems">
          {type !== 'login' && type !== 'register' ?
            <>
              {user ? <><span>{user.username}</span><button
                onClick={handleClick} className="navButton">Logout</button></> : <><Link to="/register" className="navButton" style={{ textDecoration: 'none', textEmphasis: 'none' }}>Register</Link>
                <Link to={'/login'} className="navButton" style={{ textDecoration: 'none', textEmphasis: 'none' }}>Login</Link></>}
            </> :
            type === 'login' ? <>
              <span>Not registered yet?</span>
              <Link to="/register" className="navButton"
                style={{ textDecoration: 'none', textEmphasis: 'none' }}>Register</Link>
            </>
              :
              <>
                {user ? <><span>{user.username}</span><button
                  onClick={handleClick} className="navButton">Logout</button></> : <><span>Already registered?</span>
                  <Link to={'/login'} className="navButton"
                    style={{ textDecoration: 'none', textEmphasis: 'none' }}>Login</Link></>}
              </>
          }
        </div>
      </div>
    </div>
  )
}
