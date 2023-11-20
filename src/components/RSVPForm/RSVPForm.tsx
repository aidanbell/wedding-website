import plateImg from "./icons/plate.svg";
import fishImg from "./icons/fish.svg";
import chickenImg from "./icons/chicken.svg";
import beefImg from "./icons/beef.svg";
import vegImg from "./icons/veg.svg";
import minusImg from "./icons/minus.svg";

import { RSVPFormData } from "../../types.m";

import "./RSVPForm.css"

export default function RSVPForm({
  formData,
  handleSubmit,
  handleFormChange,
  additionalNames,
  removeName,
}: {
  formData: RSVPFormData;
  handleSubmit: (event: any) => void;
  handleFormChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  additionalNames: (event: any) => void;
  removeName: (event: any) => void;
}) {
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
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <label className="names" htmlFor="name">
        Name(s):
      </label>
      <div className="names">
        <div className="names-input">
          {formData.guests?.map((guest, i) => {
            return (
              <div className="name-row" key={i}>
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
  );
}
