import { ListingFieldSchema } from "@/types/listings";

export const houseSchema: ListingFieldSchema[] = [
  // Essential Section
  {
    name: "condition",
    label: "listings.condition",
    type: "select",
    options: ["new", "excellent", "good", "fair", "needsWork"],
    section: "essential",
    required: true,
  },
  {
    name: "yearBuilt",
    label: "listings.yearBuilt",
    type: "number",
    section: "essential",
    required: true,
  },
  {
    name: "size",
    label: "listings.lotSize",
    type: "text",
    section: "essential",
    required: true,
  },
  {
    name: "bedrooms",
    label: "listings.bedrooms",
    type: "number",
    section: "essential",
    required: true,
  },
  {
    name: "bathrooms",
    label: "listings.bathrooms",
    type: "number",
    section: "essential",
    required: true,
  },
  {
    name: "parking",
    label: "listings.parking",
    type: "select",
    options: ["garage", "carport", "street", "none"],
    section: "essential",
    required: true,
  },
  {
    name: "constructionType",
    label: "listings.constructionType",
    type: "select",
    options: ["brick", "wood", "concrete", "steelFrame"],
    section: "essential",
    required: true,
  },

  // Advanced Section
  {
    name: "heating",
    label: "listings.heating",
    type: "select",
    options: ["central", "forcedAir", "radiant", "heatPump"],
    section: "advanced",
    required: false,
  },
  {
    name: "cooling",
    label: "listings.cooling",
    type: "select",
    options: ["central", "window", "split", "none"],
    section: "advanced",
    required: false,
  },
  {
    name: "basement",
    label: "listings.basement",
    type: "select",
    options: ["finished", "unfinished", "partial", "none"],
    section: "advanced",
    required: false,
  },
  {
    name: "roofType",
    label: "listings.roofType",
    type: "select",
    options: ["shingle", "metal", "tile", "flat"],
    section: "advanced",
    required: false,
  },
  {
    name: "outdoorFeatures",
    label: "listings.outdoorFeatures",
    type: "multiselect",
    options: ["pool", "patio", "deck", "garden", "sprinklers"],
    section: "advanced",
    required: false,
  },
];
