import React from "react";
import "./Project.css";

const projects = [
    {
        title: "GERICHT",
        description: "A visually stunning fine dining restaurant website that captivates visitors with its elegant design and user-friendly interface, showcasing exquisite cuisine and ambiance.",
        techstack: ["React", "CSS", "Components"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478166/Portfolio/A4_-_23_ncwdqg.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719465092/Portfolio/fine_Dining_hlalgv.mp4",
        hosted: "https://fine-dining.onrender.com",
    },
    {
        title: "Garage Go",
        description: "A comprehensive garage management software website to efficiently track vehicle details, schedule maintenance, and provide updates on vehicle readiness.",
        techstack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478173/Portfolio/A4_-_22_vu5loj.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719466203/Portfolio/Garage_go_wjt5bl.mp4",
    },
    {
        title: "BOTOX",
        description: "An elegantly designed cosmetics selling website offering a wide range of beauty products to enhance your skincare and beauty regimen.",
        techstack: ["React", "Hooks", "UI/UX", "Animations"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478173/Portfolio/A4_-_19_et2mri.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719465050/Portfolio/BOTOX_Cosmetics_goumnt.mp4",
        hosted: "https://botox-cosmetics.onrender.com",
    },
    {
        title: "Flippy",
        description: "A game inspired by Flappy Bird, featuring addictive gameplay where players navigate a character through obstacles with simple controls.",
        techstack: ["HTML", "CSS", "Vanilla Js"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478168/Portfolio/A4_-_24_wapclu.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719465579/Portfolio/Flappy_Bird_hvgi86.mp4",
        hosted: "https://flappy-bird-fg4y.onrender.com",
    },
    {
        title: "NASA Api",
        description: "A project utilizing NASA's API to showcase daily pictures captured by NASA, offering a glimpse into space exploration and celestial imagery.",
        techstack: ["React", "Axios", "API"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478180/Portfolio/A4_-_20_egpuaf.png",
        video: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478180/Portfolio/A4_-_20_egpuaf.png",
        hosted: "https://nasa-api-2iog.onrender.com",
    },
    {
        title: "Book App",
        description: "An application that provides comprehensive information about a wide range of books, allowing users to explore details such as summaries, authors, genres, and more.",
        techstack: ["React", "CSS", "API", "Components"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478174/Portfolio/A4_-_25_k2twh7.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719465120/Portfolio/BOOK_SEARCH_gohhys.mp4",
        hosted: "https://book-search-xcix.onrender.com",
    },
    {
        title: "TO-DO App",
        description: "A visually stunning todo list application with a great user interface, designed to help users organize tasks efficiently and enjoyably.",
        techstack: ["React", "React-Libraries", "CSS"],
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1719478167/Portfolio/A4_-_21_v39qqp.png",
        video: "https://res.cloudinary.com/dboa7dqkl/video/upload/v1719465835/Portfolio/ToDo_list_puexrv.mp4",
        hosted: "https://todo-app-yjvm.onrender.com",
    },
];

const ProjectCard = () => {
    return (
        <div className="project-list">
            {projects.map((item, index) => (
                <div className="project-card" key={index}>
                    <div className="project-card-content">
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <ul>
                                {item.techstack.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                            <div>
                                <a href={item?.hosted || item.video}>
                                    <button>View Project</button>
                                </a>
                                <a href={item.video}>

                                <span  class="material-symbols-outlined">play_circle</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <img style={{"zIndex" : 2 , "transform" : "translate(0px,-600px)"}} src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1719413233/Portfolio/Vector_br7kuj.png" alt="" /> */}
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
