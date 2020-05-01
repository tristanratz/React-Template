import image from "../rsc/YOUR IMAGE.jpeg";

interface Person {
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    website: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
    xing?: string;
    medium?: string;
    city: string;
    locationHint?: string;
    state: string;
    country: string;
    preferredIdes: string[];
    favTec: string[];
    operatingSystems: string[];
    programs: string[];
    interests: string[];
    about: string[]; // Paragraphs about you
}

export const person:Person = {
    firstName: "John",
    lastName: "Doe",
    image: image,
    email: "email",
    website: "website",
    instagram: "insta",
    github: "github",
    linkedin: "linkedin",
    city: "Somewhere",
    locationHint: "near Someplace bigger",
    state: "Here",
    country: "There",
    preferredIdes: [],
    favTec: [],
    operatingSystems: [],
    programs: [],
    interests: [],
    about: []
}