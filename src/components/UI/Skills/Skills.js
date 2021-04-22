import React from 'react';
import Skill from './Skill/Skill';

import classes from './Skills.module.css';

const FRONTEND_SKILLS = [
    {
        skillName: 'JavaScript',
        level: 3
    },
    {
        skillName: 'TypeScript',
        level: 2
    },
    {
        skillName: 'React',
        level: 3
    },
    {
        skillName: 'React-Router',
        level: 3
    },
    {
        skillName: 'Redux',
        level: 3
    },
    {
        skillName: 'Redux-Saga',
        level: 2
    },
    {
        skillName: 'HTML',
        level: 4
    },
    {
        skillName: 'CSS',
        level: 4
    },

];

const OTHER_SKILLS = [
    {
        skillName: 'English',
        level: 3
    },
    {
        skillName: 'Git',
        level: 2
    }
];

const Skills = props => (
    <React.Fragment>
    <div className={classes.SkillsFrontend}>
        <h2>Front-end skills</h2>
        {FRONTEND_SKILLS.map(skill =>
            <Skill key={skill.skillName} skillName={skill.skillName} level={skill.level} />)}
    </div>
    <div className={classes.SkillsOther}>
        <h2>Other skills</h2>
        {OTHER_SKILLS.map(skill =>
            <Skill key={skill.skillName} skillName={skill.skillName} level={skill.level} />)}
    </div>
    </React.Fragment>
);

export default Skills;