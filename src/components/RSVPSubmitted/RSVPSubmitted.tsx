import { useState } from 'react';
import { RSVPFormData } from "../../types.m";

import "./RSVPSubmitted.css"
import { RSVPInfoCard } from '../RSVPInfoCard/RSVPInfoCard';

export function RSVPSubmitted({ data }: { data: RSVPFormData }) {
  const [email, setEmail] = useState("");
  // const [responseData, setResponseData] = useState({});

  function handleChange(event: any) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleCheckEmail(event: any) {
    event.preventDefault();
    const response = fetch(
      "https://eb3kfqlly8.execute-api.ca-central-1.amazonaws.com/rsvp/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          httpMethod: "GET",
          email: email
        })
      }
    )
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log(err);
    });
    setResponseData(response);
  }

  return (
    <div className="rsvp-conf">
      <h2>Thank you for your RSVP!</h2>
      <p>
        We're looking forward to seeing you there! We've emailed a copy of this
        info to the email you've provided!{" "}
        <span className="email">({data.email})</span>
      </p>
      <RSVPInfoCard data={data} />
      <div className="rsvp-conf-email">
        <h2>Want us to email this to anyone else?</h2>
        <p>
          Just enter their email below and we'll send them a copy of your RSVP!
        </p>
        <form onSubmit={handleCheckEmail}>
          <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
          <input type="submit" value="Send!"/>
        </form>
      </div>
    </div>
  );
};

export default RSVPSubmitted;
