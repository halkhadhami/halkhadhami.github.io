import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { projects, publications, skills } from "./drizzle/schema.ts";

const DATABASE_URL = process.env.DATABASE_URL;

async function seed() {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection);

  console.log("Seeding database...");

  // Seed projects
  const projectsData = [
    {
      title: "Variable Air-Gap Eddy Current Regenerative Brake (VAGECRB)",
      description: "PhD research project focusing on innovative regenerative braking systems for heavy-duty equipment. Utilizing adaptive air-gap mechanisms and Halbach magnetic discs for optimal energy recovery.",
      category: "Research",
      imageUrl: "/projects/vagecrb.png",
      technologies: JSON.stringify(["ANSYS", "COMSOL", "SCADA", "Digital Twin", "FEA"]),
      externalLink: "https://github.com/halkhadhami",
      displayOrder: 1,
      isPublished: 1,
    },
    {
      title: "Cement Manufacturing Automation System",
      description: "Designed and implemented comprehensive automation system for cement manufacturing plant including PLC programming, HMI interface, and SCADA integration.",
      category: "Industrial Automation",
      imageUrl: "/projects/cement.png",
      technologies: JSON.stringify(["PLC", "HMI", "SCADA", "Siemens", "Electrical Design"]),
      displayOrder: 2,
      isPublished: 1,
    },
    {
      title: "Poultry Feed Production Control System",
      description: "Built from scratch automation system for poultry feed production with real-time monitoring, quality control, and automated reporting capabilities.",
      category: "Industrial Automation",
      imageUrl: "/projects/poultry.png",
      technologies: JSON.stringify(["PLC", "HMI", "Control Systems", "Automation"]),
      displayOrder: 3,
      isPublished: 1,
    },
  ];

  for (const project of projectsData) {
    await db.insert(projects).values(project);
  }
  console.log("✓ Projects seeded");

  // Seed publications
  const publicationsData = [
    {
      title: "Efficient Detection and Recognition of Traffic Lights for Autonomous Vehicles Using CNN",
      authors: JSON.stringify(["Hayl Khadhami", "Co-authors"]),
      status: "published",
      publicationDate: "2022-06-15",
      journal: "IEEE Conference",
      paperLink: "https://example.com/paper1",
      description: "CNN-based approach for real-time traffic light recognition in autonomous vehicle systems.",
      displayOrder: 1,
    },
    {
      title: "Automated Rural Road Restoration Using Unmanned Ground Vehicles with Drone-Assisted 3D Mapping and Deep Learning Defect Identification",
      authors: JSON.stringify(["Hayl Khadhami", "Co-authors"]),
      status: "under-review",
      publicationDate: "2024-01-01",
      journal: "Under Review",
      paperLink: null,
      description: "Integration of UGVs and drones with deep learning for automated road restoration and defect detection.",
      displayOrder: 2,
    },
    {
      title: "Harnessing UAVs and Artificial Intelligence for Precision Agriculture: A Review of Emerging Technologies and Future Prospects",
      authors: JSON.stringify(["Hayl Khadhami", "Co-authors"]),
      status: "under-review",
      publicationDate: "2024-01-01",
      journal: "Under Review",
      paperLink: null,
      description: "Comprehensive review of UAV and AI applications in modern precision agriculture.",
      displayOrder: 3,
    },
  ];

  for (const publication of publicationsData) {
    await db.insert(publications).values(publication);
  }
  console.log("✓ Publications seeded");

  // Seed skills
  const skillsData = [
    // Simulation & Design
    { name: "ANSYS Maxwell", category: "Simulation & Design", proficiency: "expert", displayOrder: 1 },
    { name: "COMSOL", category: "Simulation & Design", proficiency: "expert", displayOrder: 2 },
    { name: "SolidWorks", category: "Simulation & Design", proficiency: "advanced", displayOrder: 3 },
    { name: "MATLAB/Simulink", category: "Simulation & Design", proficiency: "advanced", displayOrder: 4 },
    { name: "Eplan E3 Series", category: "Simulation & Design", proficiency: "advanced", displayOrder: 5 },
    { name: "PCB Design (Proteus, Eagle)", category: "Simulation & Design", proficiency: "advanced", displayOrder: 6 },
    
    // Control & Automation
    { name: "PLC Programming (Siemens, Mitsubishi, Omron)", category: "Control & Automation", proficiency: "expert", displayOrder: 1 },
    { name: "SCADA Systems", category: "Control & Automation", proficiency: "expert", displayOrder: 2 },
    { name: "HMI Development", category: "Control & Automation", proficiency: "advanced", displayOrder: 3 },
    { name: "OPC UA & MQTT", category: "Control & Automation", proficiency: "advanced", displayOrder: 4 },
    { name: "Digital Twin Development", category: "Control & Automation", proficiency: "advanced", displayOrder: 5 },
    { name: "IoT Integration", category: "Control & Automation", proficiency: "intermediate", displayOrder: 6 },
    
    // Data & AI Tools
    { name: "Python (SciPy, NumPy)", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 1 },
    { name: "TensorFlow & Deep Learning", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 2 },
    { name: "Data Analytics (SPSS)", category: "Data & AI Tools", proficiency: "intermediate", displayOrder: 3 },
    { name: "CNN Pattern Recognition", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 4 },
    { name: "Jupyter Lab & Kaggle", category: "Data & AI Tools", proficiency: "intermediate", displayOrder: 5 },
    
    // Programming Languages
    { name: "C++", category: "Programming Languages", proficiency: "advanced", displayOrder: 1 },
    { name: "C#", category: "Programming Languages", proficiency: "advanced", displayOrder: 2 },
    { name: "Assembly", category: "Programming Languages", proficiency: "intermediate", displayOrder: 3 },
    { name: "Embedded Systems (AVR, PIC)", category: "Programming Languages", proficiency: "advanced", displayOrder: 4 },
  ];

  for (const skill of skillsData) {
    await db.insert(skills).values(skill);
  }
  console.log("✓ Skills seeded");

  await connection.end();
  console.log("✓ Database seeding completed!");
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
