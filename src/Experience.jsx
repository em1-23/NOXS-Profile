import React from "react";
import EXP from './ExperienceEXP.jsx'
function Experience(){
    return(
        <div className="EXPe" id="Experience">
            <h1 className="CyberBank">Experiance</h1>
            <EXP Year="2024" JOB="Frontend Developer" JobType="Web DEV" Description="I'm A Frontend Developer Since 2023 But I Was Create The Apps Width Only HTML AND CSS After I Learnt JS With Captin Abedlrahman Gamal And I Start in React World And be A Fronend Developer" />
            <div className="conencts" style={{top:"25%"}}></div>
            <EXP Year="2025" JOB="UI UX Designer" JobType="Web Design" Description="I Was Going to Use A Random UI From Pintrest And I Was Create A Components Like left top AS A Head And Another Thing Like SVG Creatore With XML And UX Create" />
            <div className="conencts" style={{top:"50%"}}></div>
            <EXP Year="2026" JOB="Backend" JobType="Web DEV" Description="I Start It Early But I Don't Use It So In 2026 I Was Learnt a PY And SQL Thinging that the Backend After This i Learnt The Node.js Codes and Express.js And I Still Weak In It But The Man Are Learning And Learing Until The Death" />
        </div>
    );
}

export default Experience;