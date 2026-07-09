import React from "react";
import ProjectCard from './ProjectCard.jsx';
import IMG1 from './assets/NOX Gym.png';
import IMG2 from './assets/NOXECOMMERS.png';
import IMG3 from './assets/ClashOfClans.png';
import IMG4 from './assets/Cookies.png';

function Projects(){
    return(
        <div className="Projects" id="Projects">
            <h1 className="CyberBank">My Projects</h1>
            <h5 className="Rovelink">A Collection Of my Pest Projects I Know It's Afew But There Was A Lot Of But I Delete It</h5>
            <section className="Projects-Section">
                <ProjectCard IMGSRC={IMG1} ProjectName="NOX GYM" Description="A Digital Website For A Gym Guys Give A Free Plans Like Arnold" Skil1="JavaScript" Skil2="React.js" Skil3="CSS" Skil4="JSON Files" />
                <ProjectCard IMGSRC={IMG2} ProjectName="NOX E-Commers" Description="A Digital Website For A Tradore Can Find And Buy Any Thing Here" Skil1="JavaScript" Skil2="React.js" Skil3="CSS" Skil4="JSON Files" />
                <ProjectCard IMGSRC={IMG3} ProjectName="Clash Of Clans" Description="A Digital Website For A Game Called Clash Of Clans" Skil1="HTML" Skil2="UI Designer" Skil3="CSS" Skil4="UX Designes" />
                <ProjectCard IMGSRC={IMG4} ProjectName="Beaty Cookies" Description="A Digital Website For A Small Bussnis make Some Of Good Sweats" Skil1="HTML" Skil2="UI Designer" Skil3="CSS" Skil4="UX Designes" />
            </section>
        </div>
    );
}

export default Projects;