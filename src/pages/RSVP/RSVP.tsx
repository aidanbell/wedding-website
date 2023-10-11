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

import "./RSVP.css";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    names: [],
    email: "",
    rsvp: true,
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
    if (event.target.name === "rsvp") {
      setFormData({ ...formData, rsvp: event.target.value === "true" });
      return;
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData);
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
      <p>Let us know if we'll see you there! To add additional names, press the '+' button</p>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label className="name" htmlFor="name">
          Name(s):
        </label>
        <div className="name">
          <div className="main-name">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <button onClick={additionalNames}>+</button>
          </div>
          {formData.names.map((name, i) => {
            return (
              <div className="more-names">
                <input
                  type="text"
                  name="names"
                  id={`name-${i}`}
                  value={formData.names[i]}
                  onChange={handleFormChange}
                />
                <button className="remove" id={`namebtn-${i}`} onClick={removeName}>
                  -
                </button>
              </div>
            );
          })}
        </div>
        <label htmlFor="email">
          Email:
          <br />
          <span className="small">Primary Contact</span>
        </label>
        <input
          className="email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <label htmlFor="rsvp">RSVP:</label>
        <div className="rsvp">
          <label htmlFor="yes">
            <input
              type="radio"
              id="yes"
              name="rsvp"
              value="true"
              checked={formData.rsvp}
              onChange={handleFormChange}
            />
            {formData.names.length ? "We'll" : "I'll"} be there
          </label>
          <label htmlFor="no">
            <input 
              type="radio" 
              id="no" 
              name="rsvp"
              value="false"
              checked={!formData.rsvp}
              onChange={handleFormChange}
              />
            Sorry, {formData.names.length ? "We" : "I"} can't make it
          </label>
        </div>
        <label htmlFor="food">
          Food:
          <br />
          <span className="small">More info coming soon!</span>
        </label>
        <select id="food" name="food" onChange={handleFormChange}>
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
          <option value="seafood">Seafood</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <label htmlFor="dietaryRestrictions">
          Dietary Restrictions:
          <br />
          <span className="small">Let us know!</span>
        </label>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleFormChange}
        />
        <label htmlFor="accessibilityNeeds">
          Accessibility Needs:
          <br />
          <span className="small">
            Anything we can do to make you more comfortable
          </span>
        </label>
        <input 
          type="text" 
          id="accessibilityNeeds" 
          name="accessibilityNeeds"
          value={formData.accessibilityNeeds}
          onChange={handleFormChange}
          />
        <label htmlFor="message">
          Message for Bride & Groom:
          <br />
          <span className="small">Optional, but welcome :)</span>
        </label>
        <textarea 
          id="message" 
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          />
        <input type="submit" value="Submit" />
      </form>
    </motion.div>
  );
}
