import { RSVPFormData } from "../../types.m";

import "./RSVPInfoCard.css";

export function RSVPInfoCard({ data }: { data: RSVPFormData }) {
  return (
    <div className="rsvp-info">
      <p className="small">Guests:</p>
      <ul className="left">
        {data.guests?.map((guest, i) => {
          return (
            <li key={i}>
              {guest.name} — {guest.food}
            </li>
          );
        })}
      </ul>
      <p className="small">Email: </p>
      <p className="left">{data.email}</p>
      <p className="small">Attending: </p>
      <p className="left">{data.rsvp ? "Yes" : "No"}</p>
      <p className="small">Dietary Restrictions: </p>
      <p className="left">{data.dietaryRestrictions}</p>
      <p className="small">Accessibility Needs: </p>
      <p className="left">{data.accessibilityNeeds}</p>
      <p className="small">Message: </p>
      <p className="left">{data.message}</p>
    </div>
  );
}
