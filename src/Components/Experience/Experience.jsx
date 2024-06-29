import React from "react";
import "./Experience.css";

const experience = [
    {
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719486936/Portfolio/Frame_95268_ka8sx0.png",
        title: "Frontend Intern",
        company: "Lavelle Networks,",
        description: "Enhanced frontend development skills through hands-on projects and collaboration in a dynamic tech environment at Lavelle Networks, Bangalore.",
        date: "21,August 2023",
    },
    {
        img : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719486937/Portfolio/Frame_95269_s6sx1v.png",
        title : "Winner of National Hackathon",
        company : "CodeFury - IEEE,",
        description : "Won CodeFury, a national-level IEEE hackathon, showcasing innovation and technical skills in problem-solving and teamwork.",
        date : "7,July 2022"

    },
    {
        img : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719486937/Portfolio/Frame_95270_exgfzz.png",
        title : "Personal Contribution to College Project",
        company : "Govt.S.K.S.J.T Institute,",
        description : "Played a pivotal role in contributing to our college project, leveraging my skills and dedication to achieve project goals effectively.",
        date : "11,November 2022"
    }
];

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-left">
                <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719463325/Portfolio/Frame_18_fhfhal.png" alt="" />
                <h1>My <br /><em>Experience</em></h1>
                <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719486644/Portfolio/arrow_nbrxsv.png" alt="" />
                <p>Have been developing since 2022</p>
            </div>
            <div className="experience-right">
                {experience.map((item) => {
                    return (
                        <>
                            <div className="experience-card">
                                <img src={item.img} alt="" />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.company}</p>
                                    <p>{item.description}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            <img style={{"width" : "150px" , "height" : "150px" , "position": "absolute" , "right" : "0px","transform":"translate(30px,-50px)" }} src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719490530/Portfolio/Vector_red_wnzyzy.png" alt="" />
        </div>
    );
};

export default Experience;
