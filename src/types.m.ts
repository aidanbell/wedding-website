export interface RSVPFormData {
  guests?: RSVPFormGuests[];
  email: string;
  rsvp: boolean;
  dietaryRestrictions: string;
  accessibilityNeeds: string;
  message: string;
}

export interface RSVPFormGuests {
  name: string;
  food: string;
}

export interface RSVPProps {
  formData: RSVPFormData;
  handleSubmit: (event: any) => void;
  handleFormChange: (event: any) => void;
  additionalNames: (event: any) => void;
  removeName: (event: any) => void;
}
