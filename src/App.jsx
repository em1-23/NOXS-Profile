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
            <Header />
            <Entro />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;