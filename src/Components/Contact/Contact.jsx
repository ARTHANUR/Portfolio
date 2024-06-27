import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-container">
            <h1>If you’d like to connect, you can do it here!</h1>
            <p>Feel free to reach out with any questions, collaboration ideas, or just to say hi. Looking forward to hearing from you!</p>
            <div>
            <button>Get in touch</button>
            <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719417318/Portfolio/Frame_13_rp8fpx.png" alt="" />

            </div>
        </div>
      <img style={{"position" : "absolute" , "transform" : "translate(-20px,-400px)"}} src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719413233/Portfolio/Vector_br7kuj.png" alt="" />
    </div>
  )
}

export default Contact
