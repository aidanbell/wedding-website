import {motion} from "framer-motion";
import {NavLink, Link} from "react-router-dom";

import "./Navbar.css"

export default function Navbar() {
  function disable(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <nav className="navbar">
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 5,
          type: "spring",
        }}>
        <div className="navbar__title">
          <Link to="/">
            <h1>Kat & Aidan</h1>
            <h3>Saturday, October 19th, 2024</h3>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="navbar__links"
        animate={{
          opacity: [0, 1],
          y: [-100, 0],
        }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink onClick={disable} className="disabled" to="/lodging">
          Lodging (Coming Soon)
        </NavLink>
        <NavLink onClick={disable} className="disabled" to="/rsvp">
          RSVP (Coming Soon)
        </NavLink>
        <NavLink onClick={disable} className="disabled" to="/registry">
          Registry (Coming Soon)
        </NavLink>
      </motion.div>
    </nav>
  );
}