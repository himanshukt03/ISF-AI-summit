export const defaultFormData = {
    fullName: "",
    email: "",
    mobile: "",
    organization: "",
    designation: "",
    city: "",
    country: "",
    registrationType: "",
    arrivalFrom: "",
    otherArrivalLocation: "",
    arrivalDate: "",
    departureDate: "",
    specialRequests: ""
  };
  
  export const registrationTypes = [
    "One-Day Conference Delegate (Junicorn Summit)",
    "One-Day Conference Delegate (AI Summit)",
    "Two-Day Conference Delegate (Junicorn + AI Summit)",
    "Speaker",
    "Mentor",
    "Sponsor",
    "Exhibitor",
    "Organizer",
    "Special Invitee / VIP",
    "Crew Member",
    "Junicorn (Full Tour/Expedition)",
    "Junicorn (Conference + Exhibition only)",
    "Metaverse Only"
  ];
  
  export const arrivalLocations = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "other", label: "Other" }
  ];