import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const services = [
  {
    name: "Cockpit",
    instances: [{ url: "/api/", control: true }],
  },
  {
    name: "Pi-hole",
    instances: [
      { label: "Instance A", url: "/api/", control: true },
      { label: "Instance B", url: "/api/", control: true },
    ],
  },
  {
    name: "Crafty Panel",
    instances: [
      { label: "Admin", url: "/api/", control: true },
      { label: "Server 1", url: "/api/", notInteractive: true },
      { label: "Server 2", url: "/api/", notInteractive: true },
    ],
  },
];

createRoot(document.getElementById("root")).render(<App services={services} />);
