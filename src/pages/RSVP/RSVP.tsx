// FORM DATA:
// - Name(s) (all guests on your invite) (string)
    // - + names
// - Email (main contact email just in case) (string)
// - RSVP (bool)
// - Food (?) (string)
// - Dietary Restrictions (string)
// - Accessiblity Needs (string)
// - Message for Bride & Groom (optional) (string)

export default function RSVP() {
  return (
    <div>
      <h1>RSVP</h1>
      <form>
        <label htmlFor="names">Name(s):</label>
        <input type="text" id="names" name="names" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="rsvp">RSVP:</label>
        <input type="checkbox" id="rsvp" name="rsvp" />
        <label htmlFor="food">Food:</label>
        <input type="text" id="food" name="food" />
        <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
        <input type="text" id="dietaryRestrictions" name="dietaryRestrictions" />
        <label htmlFor="accessibilityNeeds">Accessibility Needs:</label>
        <input type="text" id="accessibilityNeeds" name="accessibilityNeeds" />
        <label htmlFor="message">Message for Bride & Groom:</label>
        <textarea id="message" name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}