import React from "react";

function Entro(){
    return(
        <div className="Entro" id="#">
            <span className="ButtonLike">Ready To Work and Create Some Projects</span>
            <h1>Hello There !, I'm <span className="CreatorName">Mahmoud</span></h1>
            <h3 className="SecoundryFont">Full-Stack Developer</h3>
            <p className="Description">
                I Craft A Beautiful, Functional Digital Experiance And Brings Idea to Life , And I Craft <br />
                The <span className="Rovelink">UX</span> and <span className="CyberBank">UI</span> Of Webs and Brings Ideas To Modern Webs And User-Centered Design
            </p>
            <button className="Special-Button"><a href="#Projects">View my Projects</a></button>
            <button className="Special-Button Outline"><a href="#Contact">Get In Touch</a></button>
        </div>
    );
}

export default Entro;