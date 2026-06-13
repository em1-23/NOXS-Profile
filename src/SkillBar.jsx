import React from "react";

function SkillBar(NOX){
    return(
        <div className="SkillBARR">
            <h5 className="Rovelink">{NOX.Heading}</h5>
            <section className="Skillss">
                <div className="skill one">{NOX.SkillOne}</div>
                <div className="skill two">{NOX.SkillTwo}</div>
                <div className="skill thr">{NOX.SkillThr}</div>
                <div className="skill fou">{NOX.SkillFou}</div>
            </section>
        </div>
    );
}

export default SkillBar;