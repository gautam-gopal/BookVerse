import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <form action="">
            <label htmlFor="search"></label>
            <input type="text" 
            id='search' 
            required 
            placeholder='Search for a book'/>
            <button onClick={(e) => }>Search</button>
        </form>
    </nav>
  )
}

export default NavBar
