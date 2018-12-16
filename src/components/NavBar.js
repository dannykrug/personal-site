import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

const menuitem = {
 listStyle: 'none',
 textDecoration: 'none',
 fontFamily: 'Abel',
 color: '#289bff',
 fontSize: '24px',
 fontWeight: 'bold',
 padding: '0 20px 0 20px'
}

class NavBar extends Component{
  render() {
    return(
      <div>
      <div>
      <NavLink
        to='/'
        exact
        style={menuitem}
        activeStyle={{
          color: 'black'
        }}
        >Home</NavLink>
        <NavLink
          to='/projects'
          exact
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
          >Projects</NavLink>
          <NavLink
            to='/about'
            exact
            style={menuitem}
            activeStyle={{
              color: 'black'
            }}
            >About</NavLink>
            <NavLink
              to='/blogs'
              exact
              style={menuitem}
              activeStyle={{
                color: 'black'
              }}
              >Blogs</NavLink>
              <NavLink
                to='/contact'
                exact
                style={menuitem}
                activeStyle={{
                  color: 'black'
                }}
                >Contact</NavLink>
      </div>
      </div>
    )
  }
}

export default NavBar
