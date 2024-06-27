import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-star1' src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719413233/Portfolio/Vector_br7kuj.png" alt="pink star" />
      <div className='navigation-container'>
            <h2 style={{"flex-grow" : 2 , "fontSize": "2.5rem"}}>shashank</h2>
            <div></div>
            <a href="#home"><h2>About //</h2></a>
            
            <div></div>
            <a href="#project"><h2 >Projects</h2></a>
            
            <div></div>
            <a href="#contact"><h2>Contact Me</h2></a>
            

        
      </div>
      <img className='nav-star2' src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719413233/Portfolio/Vector_br7kuj.png" alt="pink star" />

    </div>
  )
}

export default Navbar
