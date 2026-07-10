import React from "react";
import ProjectCard from './ProjectCard.jsx';
import { IMGS } from "./IMGS.js";

function Projects(){
    return(
        <div className="Projects" id="Projects">
            <h1 className="CyberBank">My Projects</h1>
            <h5 className="Rovelink">A Collection Of my Pest Projects I Know It's Afew But There Was A Lot Of But I Delete It</h5>
            <section className="Projects-Section">
                {IMGS.map((IMGS)=>(
                    <ProjectCard key={IMGS.id} ProjectLink={IMGS.ProjectLink} IMGSRC={IMGS.IMGSRC} ProjectName={IMGS.ProjectName} Description={IMGS.Description} Skil1={IMGS.Skil1} Skil2={IMGS.Skil2} Skil3={IMGS.Skil3} Skil4={IMGS.Skil4} />
                ))}
            </section>
        </div>
    );
}

export default Projects;