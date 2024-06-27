import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="home-left">
            <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417186/Portfolio/Frame_14_cik4vw.png" alt="" />
            <h1>I develope 👨‍💻 top notch <em>websites</em> </h1>
            <a href="">
            <button>View Projects</button>
            <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417318/Portfolio/Frame_13_rp8fpx.png" alt="" />
            </a>
            
        </div>

        <div className="home-right">
            <div><img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417229/Portfolio/Frame_20_awzsue.png" alt="" />
            <h3>SHASHANK</h3>

        </div>
        <img className='home-arrow' src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417228/Portfolio/Arrow_07_uxpq0a.png" alt="" />
        <img className="home-img" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417230/Portfolio/Size7_ihzvqe.png" alt="" />
        </div>
    </div>
  )
}

export default Home
