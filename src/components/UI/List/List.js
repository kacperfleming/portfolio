import {useState} from "react";

import classes from "./List.module.css";

function List(props) {
    const [expanded, setExpanded] = useState(window.innerWidth >= 700 ? 1 : 0);

  return (
    <div className={classes.ListWrapper}>
      <h2 onClick={() => setExpanded(prevState => prevState ? 0 : 1)}>{props.listTitle}</h2>
      <ul style={{height: expanded !== 0 ? `${props.length * 40}px` : 0}} className={classes.List}>
        {props.children}
      </ul>
    </div>
  );
};

export default List;
