import React from "react";

function Contact(){
    return(
        <div className="Contact" id="Contact">
            <h1 className="Avengers">LET'S   WORK   TOGETHER</h1>
            <section className="Section-Contact">
                <form>
                    <span className="Rovelink">Send A Massage</span>
                    <input type="text" id="Name" className="BOXFORM" placeholder="Name"/>
                    <textarea id="Massage" className="BOXFORM Massage" placeholder="Message" style={{height:"100px"}} rows="5" cols="50" />
                    <button className="Special-Button" style={{padding:"5px 30px",margin:"0",marginBottom:"3%",width:"98%",color:"white"}}>Send Massage</button>
                </form>
                <section className="Rules">
                    I'm Always Open From 2 P.M To 6 A.M (GMT) . <br />
                    I Onlay Takes My Massage From Whatsapp or Email . <br />
                    The Response Massage Can Take From 5 min to 1 hour.<br />
                    This Time Of Respone Depend To The Time You Send It If In The Open Time I Will Respone In This Range <br />
                    Else Any Time Above This Will Take From 5 Hours to 10 Hours To Response <br /><br />
                    For More Attention Follow Me In This Socials <br />
                    <section className="Social">
                        <h4 className="CyberBank">My Social</h4>
                        <ul style={{display:"flex",listStyle:"none",gap:"5px",padding:"3px 5px",justifyContent:"space-between",border:"1px solid #7700ff",borderRadius:".3rem"}}>
                            <li><a href="https://www.instagram.com/eplat.form/">INSTAGRAM</a></li>
                            <li><a href="mailto:melngar650@gmail.com">GMAIL</a></li>
                            <li><a href="https://www.linkedin.com/in/mahmoudahmedelngar01027680112">LINKED IN</a></li>
                            <li><a href="https://wa.me/+201027680112">WHATSAPP</a></li>
                        </ul>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Contact;