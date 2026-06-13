import React from "react";
import SkillBar from './SkillBar.jsx';

function Skills(){
    return(
        <div className="Skills" id="Skills">
            <h1 className="CyberBank">Skills </h1>
            <section className="SkillBars">
                <SkillBar Heading="Frontend Developer" SkillOne="React.js" SkillTwo="JavaScript" SkillThr="TypeScript" SkillFou="Html"/>
                <SkillBar Heading="Bacnkend Developer" SkillOne="Node.js" SkillTwo="Express.js" SkillThr="SQL" SkillFou="Python"/>
                <SkillBar Heading="UI UX DEsigner" SkillOne="Figma" SkillTwo="Canva" SkillThr="SVG Files" SkillFou="Coloris"/>
            </section>
        </div>
    );
}

export default Skills;