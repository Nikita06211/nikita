#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

// Get command line arguments
const args = process.argv.slice(2);

// Personal information object
const personalInfo = {
  name: "Nikita Bansal",
  title: "Software Developer",
  techStack: ["JavaScript", "Node.js", "React", "TypeScript", "MongoDB"],
  projects: [
    {
      name: "DevTinder",
      description: "A cool dating app for developers",
      url: "https://dev-tinder-web-pink.vercel.app/login"
    },
    {
      name: "Docs AI", 
      description: "Documentation Assistant",
      url: "https://docsai-frontend.pages.dev/"
    }
  ],
  contact: {
    email: "bansalnikita06@gmail.com",
    github: "https://github.com/Nikita06211",
    linkedin: "https://www.linkedin.com/in/nikita-bansal-66bb33227/"
  }
};

// Function to display info
function displayInfo() {
  console.log(`
╭─────────────────────────────────────╮
│           ${personalInfo.name}             │
│           ${personalInfo.title}        │
╰─────────────────────────────────────╯

🛠️  Tech Stack:
   ${personalInfo.techStack.join(", ")}

🚀 Projects:
${personalInfo.projects.map(project => 
  `   • ${project.name}: ${project.description}
     ${project.url}`
).join("\n")}

📫 Contact:
   Email: ${personalInfo.contact.email}
   GitHub: ${personalInfo.contact.github}
   LinkedIn: ${personalInfo.contact.linkedin}

📦 Package Version: ${packageJson.version}
  `);
}

// Handle command line arguments
if (args.includes('--info') || args.includes('-i')) {
  displayInfo();
} else if (args.includes('--version') || args.includes('-v')) {
  console.log(`v${packageJson.version}`);
} else {
  console.log(`
Usage: nikita [options]

Options:
  --info, -i     Show personal information
  --version, -v  Show version number
  --help, -h     Show this help message
  `);
}
