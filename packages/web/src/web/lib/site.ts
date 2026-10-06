export const UHAUL_URL =
  "https://www.uhaul.com/Locations/Self-Storage-near-Alexander-City-AL-35010/1039057/";
export const PHONE = "(256) 369-1198";
export const PHONE_HREF = "tel:+12563691198";
export const STREET = "277 Joseph Street";
export const CITY = "Alexander City, AL 35010";
export const ADDRESS = `${STREET}, ${CITY}`;
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=277+Joseph+Street+Alexander+City+AL+35010";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=277+Joseph+Street,+Alexander+City,+AL+35010&z=15&output=embed";

export const HOURS = {
  office: "Mon-Fri, 8 AM - 5 PM",
  officeWeekend: "Sat-Sun, Closed",
  access: "7 days, 24 hours",
};

export interface Unit {
  label: string;
  dims: string;
  full: string;
  sqft: number;
  price: number;
  fits: string;
  items: string[];
  status: "low" | "rent";
}

export const UNITS: Unit[] = [
  {
    label: "Small",
    dims: "5 × 10",
    full: "5' × 10' × 10'",
    sqft: 50,
    price: 75,
    fits: "Fits about a 1-2 bedroom home",
    items: ["Mattress set and a dresser", "20-30 medium boxes", "Seasonal décor and lawn equipment"],
    status: "low",
  },
  {
    label: "Medium",
    dims: "10 × 10",
    full: "10' × 10' × 10'",
    sqft: 100,
    price: 90,
    fits: "Fits about a 2-3 bedroom home",
    items: ["Living room set plus a bedroom", "Appliances and 40+ boxes", "Office furniture and files"],
    status: "low",
  },
  {
    label: "Medium",
    dims: "10 × 15",
    full: "10' × 15' × 10'",
    sqft: 150,
    price: 115,
    fits: "Fits about a 2-3 bedroom home",
    items: ["Full household during a move", "Multiple bedrooms plus appliances", "Contractor tools and inventory"],
    status: "rent",
  },
  {
    label: "Large",
    dims: "10 × 20",
    full: "10' × 20' × 10'",
    sqft: 200,
    price: 135,
    fits: "Fits about a 4 bedroom home or larger",
    items: ["Whole-house move or renovation", "Business stock and equipment", "Long-term family storage"],
    status: "rent",
  },
];

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export const PHOTOS: Photo[] = [
  { src: "/images/front-facade-v3.jpg", alt: "Front of the Storage Depot building with two entry doors and a paved loading area", caption: "Building front & loading area" },
  { src: "/images/entry-gate-v3.jpg", alt: "Electronic entry gate with keypad post at Storage Depot", caption: "Electronic gate entry" },
  { src: "/images/building-side-ac-v3.jpg", alt: "Side of the climate-controlled storage building with HVAC unit", caption: "Climate-controlled building" },
  { src: "/images/loading-pad-v3.jpg", alt: "Wide concrete loading pad in front of the storage building", caption: "Room to pull up and unload" },
  { src: "/images/fenced-lot-v3.jpg", alt: "Chain-link fenced lot around the storage building", caption: "Fenced, gated property" },
  { src: "/images/building-corner-v3.jpg", alt: "Corner view of the metal storage building on a mowed lawn", caption: "Well-kept grounds" },
  { src: "/images/gated-entry-v3.jpg", alt: "Gated entry and fence line leading to the storage building", caption: "Gated access" },
  { src: "/images/building-length-v3.jpg", alt: "Long side wall of the storage building", caption: "All units inside the building" },
  { src: "/images/building-wall-v3.jpg", alt: "Exterior wall of the Storage Depot building", caption: "Steel building exterior" },
  { src: "/images/roadside-sign-v3.jpg", alt: "Red Storage Depot sign at the roadside entrance", caption: "Look for the red sign" },
];

export const FAQS = [
  {
    q: "What does it cost, and is there a deposit?",
    a: `Units start at $75 a month for a 5 × 10 and run to $135 for a 10 × 20. Rates on this site are the current starting rates published on our U-Haul listing and can change with availability, so call ${PHONE} for today's exact price and any deposit or admin fee that applies to your move-in.`,
  },
  {
    q: "How do I know what size I need?",
    a: "Use our size guide: a 5 × 10 handles what a 1-2 bedroom home holds, a 10 × 10 or 10 × 15 suits most 2-3 bedroom homes, and a 10 × 20 fits a 4 bedroom home or larger. Every unit has a 10 ft ceiling, so you get more usable space than the floor plan suggests when you stack properly. If you're unsure, call us and describe what you're storing.",
  },
  {
    q: "Are the units really climate controlled?",
    a: "Yes, every unit at this facility is climate controlled, with temperatures kept between 65° and 85°F year round. In central Alabama that's the difference between furniture and instruments coming out the way they went in, and coming out warped or musty.",
  },
  {
    q: "When can I get to my unit?",
    a: `Any time. Storage access is 7 days a week, 24 hours a day with your gate code. The office is open Monday-Friday, 8 AM - 5 PM, and closed Saturday and Sunday, but you can still reserve, rent and pay online over the weekend.`,
  },
  {
    q: "Do you have drive-up units?",
    a: "All units at this location are interior units inside the building, which is what makes climate control possible. There's a wide paved pad at the building entrances, so you can pull right up to unload.",
  },
  {
    q: "Do I need my own lock?",
    a: `Every unit has a roll-up door that takes your own lock, so you hold the only key. Call ${PHONE} before you come out and we'll tell you which lock style fits best.`,
  },
  {
    q: "How do I pay each month?",
    a: "Online. This facility accepts online payments, so you can pay from your phone without stopping by the office.",
  },
  {
    q: "Who runs Storage Depot?",
    a: "Storage Depot is independently owned and operated as part of the U-Haul Self-Storage Affiliate Network, and managed locally by 3H Management. You're dealing with a local team, not a call center.",
  },
];
