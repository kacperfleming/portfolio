import React, {useState} from "react";

import classes from "./List.module.css";

function List(props) {
    const [expansion, setExpansion] = useState(0);

  return (
    <div className={classes.ListWrapper}>
      <h2 onClick={() => setExpansion(prevState => prevState ? 0 : 100)}>{props.listTitle}</h2>
      <ul style={{height: expansion, opacity: expansion}} className={classes.List}>
        {props.children}
      </ul>
    </div>
  );
};

export default List;
