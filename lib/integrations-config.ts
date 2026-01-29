export const INTEGRATIONS_SECTIONS = {
  builtToConnect: {
    title: "Built to Connect",
    description: "Utilities rely on multiple systems to manage work and data. Knowledge Twin integrates with those systems to bring information together and reduce manual handoffs, without creating another silo.",
  },
  supportedSystems: {
    title: "Supported System Types",
    systems: [
      {
        id: "cmms",
        label: "CMMS:",
        description: "Connect inspections, work orders, assets, and maintenance history.",
      },
      {
        id: "gis",
        label: "GIS:",
        description: "Link field work to spatial context and location-based data.",
      },
      {
        id: "time-series",
        label: "Time-Series and Alarm Data:",
        description: "Integrate time-series and alarm data aligned with your operational workflows and CMMS data.",
      },
      {
        id: "custom",
        label: "Forms, Spreadsheets & Custom Systems:",
        description: "Bring in data from the tools your teams already use.",
      },
    ],
  },
  flexibleOptions: {
    title: "Flexible Integration Options",
    intro: "Knowledge Twin supports multiple integration methods depending on your environment and level of existing tooling.",
    options: [
      "API-based integrations with existing platforms",
      "File-based or batch data ingestion",
      "Configurable connectors for common systems",
      "System-in-a-box deployment for teams without digital tools",
    ],
    outro: "This flexibility allows teams to start where they are and expand over time.",
  },
} as const;
