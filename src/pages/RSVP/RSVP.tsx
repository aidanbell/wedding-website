// FORM DATA:
// - Name(s) (all guests on your invite) (string)
    // - + names
// - Email (main contact email just in case) (string)
// - RSVP (bool)
// - Food (?) (string)
// - Dietary Restrictions (string)
// - Accessiblity Needs (string)
// - Message for Bride & Groom (optional) (string)
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./RSVP.css"

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    names: [],
    email: "",
    rsvp: "",
    food: "",
    dietaryRestrictions: "",
    accessibilityNeeds: "",
    message: "",
  });

  function additionalNames(event: any) {
    event.preventDefault();
    setFormData({ ...formData, names: [...formData.names, ""] });
  }

  function removeName(event: any) {
    event.preventDefault();
    const nameIndex = event.target.id.split("-")[1];
    const newNames = [...formData.names];
    newNames.splice(nameIndex, 1);
    setFormData({ ...formData, names: newNames });
  }

  function handleFormChange(event: any) {
    if (event.target.name === "names") {
      const nameIndex = event.target.id.split("-")[1];
      const newNames = [...formData.names];
      newNames[nameIndex] = event.target.value;
      setFormData({ ...formData, names: newNames });
      return;
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{
        duration: 5,
        type: "spring",
      }}
      exit={{ opacity: 0 }}>
      <h1>RSVP</h1>
      <form className="rsvp-form">
        <label htmlFor="names">
          Name(s):
          <input type="text" id="names" name="names" />
          <button onClick={additionalNames}>+</button>
        </label>
        {formData.names.map((name, i) => {
          return (
            <label htmlFor="names">
              :
              <input type="text" id={`name-${i}`} name="names" onChange={handleFormChange}/>
              <button onClick={removeName}>-</button>
            </label>
          )
          })}
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="rsvp">
          RSVP:
          <input type="checkbox" id="rsvp" name="rsvp" />
        </label>
        <label htmlFor="food">
          Food:
          <input type="text" id="food" name="food" />
        </label>
        <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
        />
        <label htmlFor="accessibilityNeeds">Accessibility Needs:</label>
        <input type="text" id="accessibilityNeeds" name="accessibilityNeeds" />
        <label htmlFor="message">Message for Bride & Groom:</label>
        <textarea id="message" name="message" />
        <input type="submit" value="Submit" />
      </form>
    </motion.div>
  );
}