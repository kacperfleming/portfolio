import { Link } from "react-router-dom";
import List from "../../../components/UI/List/List";

import classes from "./ProjectsList.module.css";

const LISTS_CONTENT = [
  {
    title: "Playground",
    items: [
      {
        itemTitle: "Fibonacci Flower",
        link: "/projects/fibonacci-flower",
      },
      {
        itemTitle: "Particle Built Image",
        link: "/projects/particle-built-image",
      },
      {
        itemTitle: "Wave",
        link: "/projects/wave",
      },
      {
        itemTitle: "Colliding Balls",
        link: "/projects/colliding-balls",
      },
    ],
  },
  {
    title: "Apps",
    items: [
      {
        itemTitle: "To-do List",
        link: "https://kacperfleming.github.io/to-do-list/",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        itemTitle: "Coming soon...",
        link: "/example",
      },
    ],
  },
];

const ProjectsList = (props) => (
  <section className={classes.ListsWrapper}>
    <h1 className={classes.Title}>Projects</h1>
    {LISTS_CONTENT.map((category, i) => (
      <List
        key={i}
        length={category.items.length}
        listTitle={category.title}
        {...props}
      >
        {category.items.map((item, i) => item.link[0] !== '/' 
        ? <a key={i} href={item.link}><li>{item.itemTitle}</li></a>
        : (
          <Link key={i} to={item.link}>
            <li>{item.itemTitle}</li>
          </Link>
        ))}
      </List>
    ))}
  </section>
);

export default ProjectsList;
