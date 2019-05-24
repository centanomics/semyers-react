import React from 'react';

function NavBar() {
  const firstName = 'Shannon'
  const lastName = 'Myers'

  const styles = {
    color: 'yellow',
    backgroundColor: 'red',
    fontSize: 24 //default unit measurement is pixels
  }
  return (
    <nav className="navbar">
      <h1 style={styles}>{`${firstName} ${lastName}`}</h1>
    </nav>
  )
}

export default NavBar;