import React from 'react'
import './Navbar.css'

function Navbar() {
  const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = '/login';
};

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <h4 className='avatar' style={{cursor:'pointer'}} onClick={()=>{handleLogout()
      }}>Logout</h4>
    </div>
  )
}

export default Navbar
