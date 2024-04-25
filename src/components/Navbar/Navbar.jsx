import React from 'react'
import './Navbar.css'
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
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href='Skills/Skills.jsx'>Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href='WorkExperience/WorkExperience.html'>Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href='ContactMe/ContactMe.jsx'>Contact Me</a>
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