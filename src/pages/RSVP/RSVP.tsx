// FORM DATA:
// - Name(s) (all guests on your invite) (string)
// - + names
// - Email (main contact email just in case) (string)
// - RSVP (bool)
// - Food (?) (string)
// - Dietary Restrictions (string)
// - Accessiblity Needs (string)
// - Message for Bride & Groom (optional) (string)
import { useState, FC } from "react";
import { motion } from "framer-motion";

import { RSVPFormData } from "../../types.m";

import RSVPForm from "../../components/RSVPForm/RSVPForm";
import RSVPSubmitted from "../../components/RSVPSubmitted/RSVPSubmitted";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

import "./RSVP.css";

export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    guests: [{ name: "", food: "" }],
    email: "",
    rsvp: true,
    dietaryRestrictions: "",
    accessibilityNeeds: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
      "https://eb3kfqlly8.execute-api.ca-central-1.amazonaws.com/rsvp",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          httpMethod: "POST",
          data: {
            ...formData,
            id: Math.floor(Date.now() / 10000).toString(),
          },
        }),
      }
    ).then((res) => res.json())
    .then((data) => {
      if (data.statusCode === "400") {
        setError("Looks like someone has made an RSVP with that email. Please check your email for your RSVP confirmation");
      } else {
        setSubmitted(true);
      }
    })
    .catch((err) => {
      console.log(err)
    });
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
      {submitted ? (
        <RSVPSubmitted data={formData} />
      ) : (
        <>
          {/* render ErrorModal if error is present */}
          {error && (
            <ErrorModal
              isOpen={!!error}
              errorMessage={error}
              onClose={() => setError("")}
            />
          )}
          <p className="desc">
            Let us know if we'll see you there! Add one name and food selection
            per guest. If you have any dietary restrictions or accessibility
            needs, please let us know in the appropriate fields below.
          </p>
          <RSVPForm
            formData={formData}
            handleSubmit={handleSubmit}
            handleFormChange={handleFormChange}
            additionalNames={additionalNames}
            removeName={removeName}
          />
        </>
      )}
    </motion.div>
  );
}
