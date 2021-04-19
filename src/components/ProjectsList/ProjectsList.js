import React from "react";
import { NavLink } from "react-router-dom";
import List from "../UI/List/List";

import classes from './ProjectsList.module.css';

const LISTS_CONTENT = [
  {
    title: "Generative Art",
    items: [
      {
        itemTitle: "Fibonacci Flower",
        link: "/projects/fibonacci-flower"
      },
      {
        itemTitle: "Fluctuating Text",
        link: "/fluctuating-text"
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        itemTitle: "Example 1",
        link: "/example-1"
      },
      {
        itemTitle: "Example 2",
        link: "/example-2"
      },
    ],
  },
  {
      title: "Others",
      items: [
          {
              itemTitle: "Other stuff 1",
              link: "/other 1"
          },
          {
            itemTitle: "Other stuff 2",
            link: "/other 2"
          }
      ]
  }
];

const ProjectsList = (props) => (
  <div className={classes.ListsWrapper}>
    <h1 className={classes.Title}>Projects</h1>
    {LISTS_CONTENT.map((category, i) => (
      <List key={i} listTitle={category.title} {...props}>
        {category.items.map((item, i) => (
          <NavLink key={i} to={item.link}>
            <li>{item.itemTitle}</li>
          </NavLink>
        ))}
      </List>
    ))}
  </div>
)


export default ProjectsList;
