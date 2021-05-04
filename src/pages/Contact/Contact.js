import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

import classes from "./Contact.module.css";

const Contact = (props) => {

  return (<section className={classes.Contact}>
    <h2>Find me here!</h2>
    <ul className={classes.Socials}>
      <li><a href="https://github.com/kacperfleming"><FontAwesomeIcon color="rgb(0, 130, 139" size="3x" icon={faGithub} /></a></li>
      <li><a href="https://www.facebook.com/profile.php?id=100013453171351"><FontAwesomeIcon color="rgb(0, 130, 139" size="3x" icon={faFacebook} /></a></li>
    </ul>
    <p>or send me an e-mail</p>
    <a style={{textDecoration: 'none', color: 'rgb(0, 130, 139'}} href="mailto: kfleming424@gmail.com">kfleming424@gmail.com</a>
  </section>)
};

export default Contact;
