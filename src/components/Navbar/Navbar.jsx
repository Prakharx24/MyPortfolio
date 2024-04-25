import React from 'react'
import './Navbar.css'
import '../Skills/Skills.jsx'
import '../WorkExperience/WorkExperience.jsx'
import '../ContactMe/ContactMe.jsx'


import logo  from './any.svg';

const Navbar= () => {
    return(
        <>
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    
                    {/* <div className='name'>Prakhar Pratham</div> */}
                    
                    <img src={logo} alt="logo" className='logo' />
                    <ul>
                        <li>
                            <a href="/" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#Skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href='#Exp'>Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href='#Cont'>Contact Me</a>
                        </li>

                        <button className='contact-btn' onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>

                    <button class="menu-btn" onClick={() => {}}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{fontSize:"1.8rem"}}
                        >
                            Menu
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;