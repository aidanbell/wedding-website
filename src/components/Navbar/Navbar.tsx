import {motion} from "framer-motion";
import {NavLink, Link} from "react-router-dom";

import "./Navbar.css"

export default function Navbar() {

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
        <NavLink to="/rsvp">RSVP</NavLink>
        <NavLink to="/registry">Registry</NavLink>
        <NavLink to="/lodging">Lodging</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
      </motion.div>
    </nav>
  );
}