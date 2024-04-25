import React from "react";
import './Skills.css';
import {SKILLS} from "../../utils/data"
import SkillCard from "./SkillCard/SkillCard";
console.log(SKILLS);
const Skills = () => {
    return (
        <section id="Skills" className="skills-container">
            <h5>Technical Proficiency</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            />
                    ))}
                </div>

                </div>
        </section>
    );
};
export default Skills;
