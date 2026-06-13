import React from "react";

function EXP(NOX){
    return(
        <div className="EXP">
            <div className="Ciricle-Of-Year">{NOX.Year}</div>
            <p className="Pragraphof-EXP">
                <h5>{NOX.JOB}</h5>
                <h6 style={{color:"#7700ff"}}>{NOX.JobType}</h6>
                <p>
                    {NOX.Description}
                </p>
            </p>
        </div>
    );
}

export default EXP;