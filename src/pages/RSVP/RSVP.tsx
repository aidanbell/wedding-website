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
import { motion } from "framer-motion";

import plateImg from "./icons/plate.svg";
import fishImg from "./icons/fish.svg";
import chickenImg from "./icons/chicken.svg";
import beefImg from "./icons/beef.svg";
import vegImg from "./icons/veg.svg";
import minusImg from "./icons/minus.svg";

import "./RSVP.css";

interface RSVPFormData {
  guests?: RSVPFormGuests[];
  email: string;
  rsvp: boolean;
  dietaryRestrictions: string;
  accessibilityNeeds: string;
  message: string;
}

interface RSVPFormGuests {
  name: string;
  food: string;
}

export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    guests: [{ name: "", food: "" }],
    email: "",
    rsvp: true,
    dietaryRestrictions: "",
    accessibilityNeeds: "",
    message: "",
  });

  function additionalNames(event: any) {
    event.preventDefault();
    setFormData({
      ...formData,
      guests: [...(formData.guests || []), { name: "", food: "" }],
    });
  }

  function removeName(event: any) {
    event.preventDefault();
    const nameIndex = event.target.id.split("-")[1];
    console.log(event.target)
    const newNames = [...(formData.guests || [])];
    console.log(newNames[nameIndex])
    newNames.splice(nameIndex, 1);
    setFormData({ ...formData, guests: newNames });
  }

  function handleFormChange(event: any) {
    if (event.target.name === "names") {
      const nameIndex = event.target.id.split("-")[1];
      const newNames = [...(formData.guests || [])];
      newNames[nameIndex] = {
        name: event.target.value,
        food: newNames[nameIndex]?.food || "",
      };
      setFormData({ ...formData, guests: newNames });
      return;
    }
    if (event.target.name === "foods") {
      const nameIndex = event.target.id.split("-")[1];
      const newNames = [...(formData.guests || [])];
      newNames[nameIndex] = {
        name: newNames[nameIndex]?.name || "",
        food: event.target.value,
      };
      setFormData({ ...formData, guests: newNames });
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
    console.log(JSON.stringify(formData));
    const response = fetch(
      "https://1v2l1f3bf5.execute-api.us-east-2.amazonaws.com/rsvp",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({...formData, id: Math.floor(Date.now() /10000).toString()}),
      }
    ).then(res => res.json())
    console.log(response);
  }

  function foodIconSwitcher(food: string) {
    switch (food) {
      case "chicken":
        return chickenImg;
      case "beef":
        return beefImg;
      case "seafood":
        return fishImg;
      case "veg":
        return vegImg;
      default:
        return plateImg;
    }
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
      <p className="desc">
        Let us know if we'll see you there! Add one name and food selection per
        guest. If you have any dietary restrictions or accessibility needs,
        please let us know in the appropriate fields below.
      </p>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label className="names" htmlFor="name">
          Name(s):
        </label>
        <div className="names">
          <div className="names-input">
            {formData.guests?.map((guest, i) => {
              return (
                <div className="name-row">
                  <input
                    type="text"
                    name="names"
                    id={`name-${i}`}
                    value={guest.name}
                    required
                    onChange={handleFormChange}
                  />
                  <label htmlFor={`food-${i}`}>
                    <img
                      className="icon"
                      src={foodIconSwitcher(guest.food)}
                      alt="Plate Icon"
                    />
                  </label>
                  <select
                    id={`food-${i}`}
                    name="foods"
                    required
                    value={guest.food}
                    onChange={handleFormChange}>
                    <option value="" disabled>
                      What's for dinner?
                    </option>
                    <option value="chicken">Chicken</option>
                    <option value="beef">Beef</option>
                    <option value="seafood">Seafood</option>
                    <option value="veg">Vegetarian</option>
                  </select>
                  {i === 0 ? (
                    <></>
                  ) : (
                    <button className="remove" onClick={removeName}>
                      <img
                        className="icon"
                        id={`namebtn-${i}`}
                        src={minusImg}
                        alt="Minus Icon"
                      />
                    </button>
                  )}
                </div>
              );
            })}
            <div className="add-btn-container">
              <button className="add" onClick={additionalNames}>
                + Add Another Guest
              </button>
            </div>
          </div>
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
          required
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
            {formData.guests?.length ? "We'll" : "I'll"} be there
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
            Sorry, {formData.guests?.length ? "We" : "I"} can't make it
          </label>
        </div>
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
