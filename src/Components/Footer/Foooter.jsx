import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";


const links = {
    instagram : "https://www.instagram.com/shashank_arthanur/",
    github : "https://github.com/ARTHANUR",
    linkedin : "https://www.linkedin.com/in/shashank-arthanur/",
    mail : "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPVpddfxDbJcLLCwdxwPwTlmfScsFDdtdWKfCsQzrZxJxkmFXmjDMPtWQhbHjBfkqpDQrM"
}

const Footer = () => {
    return (
        <div className="footer">
            <h2>SHASHANK</h2>
            <div>
                <a href={links.instagram}>
                    <InstagramIcon />
                </a>

                <a href={links.github}>
                    <GitHubIcon />
                </a>

                <a href={links.linkedin}>
                    <LinkedInIcon />
                </a>
                <a href={links.mail}>
                    <EmailIcon />
                </a>
            </div>
        </div>
    );
};

export default Footer;
