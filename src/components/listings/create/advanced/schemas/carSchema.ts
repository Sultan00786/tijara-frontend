import { ListingFieldSchema } from "@/types/listings";

export const carSchema: ListingFieldSchema[] = [
  // Essential Section
  {
    name: "color",
    label: "exteriorColor",
    type: "colorpicker",
    section: "essential",
    required: true,
    validate: (value: string) => (!value ? "Exterior color is required" : null),
  },
  {
    name: "interiorColor",
    label: "interiorColor",
    type: "colorpicker",
    section: "essential",
    required: true,
    validate: (value: string) => (!value ? "Interior color is required" : null),
  },
  {
    name: "mileage",
    label: "mileage",
    type: "number",
    section: "essential",
    required: true,
    validate: (value: number) => !value && value !== 0 ? "Mileage is required" : null,
  },
  {
    name: "condition",
    label: "condition",
    type: "select",
    options: ["new", "likeNew", "excellent", "good", "fair", "poor", "salvage"],
    section: "essential",
    required: true,
    validate: (value: string) => (!value ? "Condition is required" : null),
  },
  {
    name: "registrationStatus",
    label: "registrationStatus",
    type: "select",
    options: ["registered", "unregistered", "expired"],
    section: "essential",
    required: true,
  },
  {
    name: "previousOwners",
    label: "listings.previousOwners",
    type: "number",
    section: "essential",
    required: true,
  },
  {
    name: "engine",
    label: "engine",
    type: "text",
    section: "essential",
    required: true,
  },
  {
    name: "warranty",
    label: "warranty",
    type: "number",
    section: "essential",
    required: true,
    validate: (value: number) => {
      if (value === undefined || value === null)
        return "Warranty months is required";
      if (value < 0) return "Warranty months must be 0 or greater";
      return null;
    },
  },
  {
    name: "serviceHistory",
    label: "serviceHistory",
    type: "select",
    options: ["full", "partial", "none"],
    section: "essential",
    required: true,
    validate: (value: string) =>
      !value ? "Service history is required" : null,
  },

  // Advanced Section
  {
    name: "horsepower",
    label: "horsepower",
    type: "number",
    section: "advanced",
    required: false,
  },
  {
    name: "torque",
    label: "torque",
    type: "number",
    section: "advanced",
    required: false,
  },
  {
    name: "drivetrain",
    label: "performance.drivetrain",
    type: "select",
    options: ["fwd", "rwd", "awd", "4wd"],
    section: "advanced",
    required: false,
  },
  {
    name: "seatingMaterial",
    label: "comfort.seatingMaterial",
    type: "select",
    options: ["cloth", "leather", "leatherette", "premium_leather"],
    section: "advanced",
    required: false,
  },
  {
    name: "seatHeating",
    label: "comfort.seatHeating",
    type: "select",
    options: ["front", "front_rear", "none"],
    section: "advanced",
    required: false,
  },
  {
    name: "seatVentilation",
    label: "comfort.seatVentilation",
    type: "select",
    options: ["front", "front_rear", "none"],
    section: "advanced",
    required: false,
  },
  {
    name: "sunroof",
    label: "comfort.sunroof",
    type: "select",
    options: ["none", "standard", "panoramic", "dual_panel"],
    section: "advanced",
    required: false,
  },
  {
    name: "airbags",
    label: "safety.airbags",
    type: "select",
    options: ["front", "front_side", "full_curtain"],
    section: "advanced",
    required: false,
  },
  {
    name: "parkingSensors",
    label: "safety.parkingSensors",
    type: "select",
    options: ["front", "rear", "both", "none"],
    section: "advanced",
    required: false,
  },
  {
    name: "backupCamera",
    label: "safety.backupCamera",
    type: "select",
    options: ["standard", "360_view", "none"],
    section: "advanced",
    required: false,
  },
];
