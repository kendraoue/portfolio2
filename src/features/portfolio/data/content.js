import manageUserDashboardImage from "../../../assets/images/ManageUserDashboard.png";
import pulseCareLinkDashboard from "../../../assets/images/PulseCareLink_Dashboard_Redacted.png";
import { asset } from "../../../utils/assets";
import { aboutSkills } from "../../desktop/data/about-skills";

const technologyIcons = (...ids) =>
  ids.map((id) => aboutSkills.find((skill) => skill.id === id));

export const projects = [
  {
    id: 1,
    title: "PulseCareLink",
    date: "2023 – Present",
    image: pulseCareLinkDashboard,
    icon: asset("material-symbols--event.png"),
    technologies: technologyIcons(
      "react",
      "typescript",
      "dotnet",
      "postgresql",
      "cosmos",
      "azure",
    ),
    description:
      "A full-stack healthcare platform built with React, TypeScript, FastAPI, .NET, PostgreSQL, Cosmos DB, Docker, and Azure for managing access, caregivers, medications, adherence, wellness, and ongoing care.",
    highlights: [
      "Translated stakeholder needs into technical requirements and workflows.",
      "Integrated React, FastAPI, and .NET services through REST APIs.",
      "Connected PostgreSQL, Cosmos DB, and SQL Server data flows.",
      "Implemented authentication with Keycloak OIDC and bearer tokens.",
      "Built automated testing across frontend, API, and backend layers.",
      "Supported CI/CD, preproduction validation, and production releases.",
      "Improved the product using staff feedback and user-reported issues.",
    ],
  },
  {
    id: 2,
    title: "ResQHubAI",
    date: "2022 – 2024",
    image: asset("GamerHub.png"),
    icon: asset("cil--chat-bubble.png"),
    technologies: technologyIcons(
      "dotnet",
      "sql",
      "cosmos",
      "azure",
      "github-actions",
    ),
    description:
      "A staff-facing ASP.NET Core platform for managing healthcare operations, call review, users, metrics, and support workflows.",
    highlights: [
      "Became a key production support resource for a large .NET application.",
      "Reduced database calls from 300+ to 3 per 100 users.",
      "Refactored monolithic code into focused, maintainable modules.",
      "Added xUnit testing and GitHub Actions build validation.",
      "Resolved production issues across APIs, SQL, Cosmos DB, and Azure.",
      "Turned staff pain points into targeted application improvements.",
      "Created technical, deployment, troubleshooting, and user documentation.",
    ],
  },
  {
    id: 3,
    title: "Automated Call & Reminder Platform",
    date: "2021 – 2023",
    image: manageUserDashboardImage,
    icon: asset("spreadsheet.png"),
    technologies: technologyIcons(
      "dotnet",
      "azure",
      "sql",
      "cosmos",
      "github-actions",
    ),
    description:
      "A distributed .NET and Azure platform for automated calls, reminders, retries, and post-call analysis.",
    highlights: [
      "Supported distributed .NET services across Azure Functions and APIs.",
      "Diagnosed retry, callback, scheduling, and duplicate-processing failures.",
      "Improved recovery and terminal-state handling for failed calls.",
      "Reduced incorrect missed-call and adherence outcomes.",
      "Traced incidents using logs, call statuses, and database records",
      "Created repair workflows for incorrect production data.",
      "Documented architecture and cross-service troubleshooting.",
    ],
  },
];

export const interests = [
  {
    name: "Gaming",
    image: "Controller.png",
    description:
      "I enjoy playing video games. They help me unwind and think critically.",
  },
  {
    name: "Music",
    image: "Music.png",
    description:
      "I love discovering new bands and attending live shows. Music fuels my creativity.",
  },
  {
    name: "Outgoing",
    image: "Trees.png",
    description:
      "I love spending time outdoors. It helps me recharge and find inspiration.",
  },
];
