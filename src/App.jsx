import React from 'react';
import Header from './Header.jsx';
import Entro from './Entro.jsx';
import About from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App(){
    return(
        <div>
            <Header className='Header' />
            <Entro className="Entro" id="" />
            <About className="About-Me" id="About" />
            <Skills className="Skills" />
            <Experience className="EXPe" />
            <Projects className="Projects" />
            <Contact />
        </div>
    );
}

export default App;