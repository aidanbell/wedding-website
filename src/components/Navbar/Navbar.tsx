import {motion} from "framer-motion";
import {animate} from "framer-motion/dom"

import "./Navbar.css"

export default function Navbar() {

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        y: [-100, 0],
        
      }}>
      <nav className="navbar">
        <div className="navbar__title">
          <h1>Kat & Aidan</h1>
        </div>
        <div className="navbar__links">
          <a href="/">Home</a>
          <a href="/RSVP">RSVP</a>
          <a href="/registry">Registry</a>
          <a href="/travel">Travel & Lodging</a>
          <a href="/FAQs">FAQs</a>
          <a href="/photos">Photos</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </motion.div>
  )
}