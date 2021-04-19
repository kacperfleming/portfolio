import React from "react";

import classes from './Skill.module.css';

const Skill = (props) => {

    let achievedStars = '';
    for(let i = 0; i < props.level; i++) achievedStars += '☆';
    let remainedStart = '';
    for(let i = 0; i < 5 - achievedStars.length; i++) remainedStart += '☆';

  return (
    <div className={classes.Skill}>
      <h2>{props.skillName}</h2>
      <span className={classes.Gold}>{achievedStars}</span>
      {remainedStart}
    </div>
  );
};

export default Skill;
