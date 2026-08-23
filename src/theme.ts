import type { ThemeConfig } from "./types";

export const theme = {
  "id": "home",
  "product": "Home Steward",
  "tagline": "Schedule preventative household care before repairs become emergencies.",
  "itemLabel": "Maintenance job",
  "dateLabel": "Service date",
  "effortLabel": "Minutes",
  "impactLabel": "Failure impact",
  "categories": [
    "Safety",
    "Appliances",
    "Cleaning",
    "Utilities",
    "Exterior"
  ],
  "seeds": [
    [
      "Test smoke alarms",
      "Safety",
      20,
      5
    ],
    [
      "Clean refrigerator coils",
      "Appliances",
      35,
      4
    ],
    [
      "Inspect window seals",
      "Exterior",
      45,
      3
    ]
  ]
} as const satisfies ThemeConfig;
