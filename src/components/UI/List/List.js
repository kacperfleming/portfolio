import React, {useState} from "react";

import "./List.css";

const List = (props) => {
    const [expansion, setExpansion] = useState(0);

  return (
    <div className="List-Wrapper">
      <h2 onClick={() => setExpansion(prevState => prevState ? 0 : 100)} className="List-Wrapper">{props.listTitle}</h2>
      <ul style={{height: expansion, opacity: expansion}} className="List">
        {props.children}
      </ul>
    </div>
  );
};

export default List;
