import { unsplash } from "@/lib/unsplash";
import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    name: "Anjali Menon",
    role: "Homeowner",
    location: "Kaloor, Kochi",
    quote:
      "HiGarden turned an awkward, shaded courtyard into the room we actually spend the most time in. They understood the light before they suggested a single plant.",
    avatar: {
      src: unsplash("1494790108377-be9c29b29330", 200, 200),
      alt: "Portrait of Anjali Menon",
      recommendedFilename: "higarden-testimonial-anjali-menon.jpg",
    },
    rating: 5,
  },
  {
    name: "Rahul Varma",
    role: "Principal Architect, Varma & Associates",
    location: "Kochi",
    quote:
      "We bring HiGarden in at the drawing stage now, not after handover. Their consultation shaped how we placed windows on our last two villa projects.",
    avatar: {
      src: unsplash("1519085360753-af0119f7cbe7", 200, 200),
      alt: "Portrait of Rahul Varma",
      recommendedFilename: "higarden-testimonial-rahul-varma.jpg",
    },
    rating: 5,
  },
  {
    name: "Meera Pillai",
    role: "General Manager",
    location: "Backwater Resort, Alleppey",
    quote:
      "Guests photograph the gardens more than the rooms. HiGarden maintains the grounds on a schedule so it looks resort-ready every single day, not just at launch.",
    avatar: {
      src: unsplash("1573496359142-b8d87734a5a2", 200, 200),
      alt: "Portrait of Meera Pillai",
      recommendedFilename: "higarden-testimonial-meera-pillai.jpg",
    },
    rating: 5,
  },
  {
    name: "Thomas Jacob",
    role: "Homeowner",
    location: "Kollam",
    quote:
      "The renovation phase was the part I worried about most — a torn-up garden for months. HiGarden phased it so we always had a usable lawn.",
    avatar: {
      src: unsplash("1500648767791-00dcc994a43e", 200, 200),
      alt: "Portrait of Thomas Jacob",
      recommendedFilename: "higarden-testimonial-thomas-jacob.jpg",
    },
    rating: 5,
  },
  {
    name: "Sneha Nair",
    role: "Cafe Owner",
    location: "Thiruvananthapuram",
    quote:
      "The living wall they installed is the single most photographed corner of the cafe. It's also survived two summers without a callback.",
    avatar: {
      src: unsplash("1544005313-94ddf0286df2", 200, 200),
      alt: "Portrait of Sneha Nair",
      recommendedFilename: "higarden-testimonial-sneha-nair.jpg",
    },
    rating: 5,
  },
  {
    name: "Vishnu Prasad",
    role: "Facilities Head, Tech Park",
    location: "Kochi",
    quote:
      "Enterprise landscaping usually means generic hedges. HiGarden proposed something considered for our campus and delivered it on a commercial timeline.",
    avatar: {
      src: unsplash("1560250097-0b93528c311a", 200, 200),
      alt: "Portrait of Vishnu Prasad",
      recommendedFilename: "higarden-testimonial-vishnu-prasad.jpg",
    },
    rating: 5,
  },
];
