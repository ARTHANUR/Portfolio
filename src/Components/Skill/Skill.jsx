import React from 'react'
import "./Skill.css"

const skills = [
    "Figma", 
    "MongoDB", 
    "ExpressJs", 
    "ReactJs", 
    "NodeJs", 
    "Angular", 
    "JavaScript", 
    "UI/UX",
    "Redux",
    "GraphQL",
    "TypeScript",
    "Jest",
    "Webpack",
    "Docker",
    "Git"
  ];

const Skill = () => {
  return (
    <div className='skill'>
      <div  className='scroll-text'>
        {
            skills.map((item) => {
                return(
                    <>
                    <h1>{item}</h1>
                    </>
                )
            })
        }
        
      </div>
    </div>
  )
}

export default Skill
