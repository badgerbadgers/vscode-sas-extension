import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "README",
    "installation",
    "matrix",
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "Features/index",
        "Features/sasCodeEditing",
        "Features/running",
        "Features/runningTask",
        "Features/sasNotebook",
        "Features/accessServer",
        "Features/accessLibraries",
        "Features/accessContent",
        "Features/errorsWarnings",
      ],
    },
    {
      type: "category",
      label: "Configurations",
      collapsed: false,
      items: [
        "Configurations/index",
        "Configurations/sasLog",
        {
          type: "category",
          label: "Profile Definitions",
          collapsed: false,
          items: [
            "Configurations/Profiles/index",
            "Configurations/Profiles/viya",
            "Configurations/Profiles/sas9ssh",
            "Configurations/Profiles/sas9local",
            "Configurations/Profiles/additional",
          ],
        },
      ],
    },
    "faq",
  ],
};

export default sidebars;
