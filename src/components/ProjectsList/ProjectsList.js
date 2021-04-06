import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../../containers/Projects/Projects";

import List from "../UI/List/List";

const listsContent = [
  {
    title: "Generative Art",
    items: [
      {
        itemTitle: "Particle Built Image",
        link: "/particle-built-image"
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

const projectsList = (props) =>
  listsContent.map((category, i) => (
    <List key={i} listTitle={category.title} {...props}>
      {category.items.map((item, i) => (
        <NavLink key={i} to={item.link}>
          <li>{item.itemTitle}</li>
        </NavLink>
      ))}
    </List>
  ));

export default projectsList;
