import React from "react";

function ProjectCard(NOX){
    return(
        <div className="ProjectsCard">
            <img src={NOX.IMGSRC} alt="" />
            <h3 className="Rovelink">{NOX.ProjectName}</h3>
            <p>{NOX.Description}</p>
            <ul className="ProjectsSkills" style={{display:"flex",gap:"20px",listStyle:"none"}}>
                <li className="skill">{NOX.Skil1}</li>
                <li className="skill">{NOX.Skil2}</li>
                <li className="skill">{NOX.Skil3}</li>
                <li className="skill">{NOX.Skil4}</li>
            </ul>
            <button style={{padding:"5px 30px",fontWeight:"500"}} className="Special-Button Outline"><a href={NOX.ProjectLink}>View Detilas</a></button>
        </div>
    );
}

export default ProjectCard;