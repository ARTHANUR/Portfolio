import React from 'react'
import "./Project.css"
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='project'>
        <div className='project-heading'>
            <h1>My <em>Projects</em></h1>
            <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719463325/Portfolio/Frame_18_fhfhal.png" alt="" />
        </div>
        <ProjectCard />
    </div>
  )
}

export default Project
