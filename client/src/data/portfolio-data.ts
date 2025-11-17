// Static portfolio data - no database required

export const projectsData = [
  {
    id: 1,
    title: "Variable Air-Gap Eddy Current Regenerative Brake (VAGECRB)",
    description: "PhD research project focusing on innovative regenerative braking systems for heavy-duty equipment. Utilizing adaptive air-gap mechanisms and Halbach magnetic discs for optimal energy recovery.",
    category: "Research",
    imageUrl: "/projects/vagecrb.png",
    technologies: ["ANSYS", "COMSOL", "SCADA", "Digital Twin", "FEA"],
    externalLink: "https://github.com/halkhadhami",
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Cement Manufacturing Automation System",
    description: "Designed and implemented comprehensive automation system for cement manufacturing plant including PLC programming, HMI interface, and SCADA integration.",
    category: "Industrial Automation",
    imageUrl: "/projects/cement.png",
    technologies: ["PLC", "HMI", "SCADA", "Siemens", "Electrical Design"],
    displayOrder: 2,
  },
  {
    id: 3,
    title: "Poultry Feed Production Control System",
    description: "Built from scratch automation system for poultry feed production with real-time monitoring, quality control, and automated reporting capabilities.",
    category: "Industrial Automation",
    imageUrl: "/projects/poultry.png",
    technologies: ["PLC", "HMI", "Control Systems", "Automation"],
    displayOrder: 3,
  },
];

export const publicationsData = [
  {
    id: 1,
    title: "Efficient Detection and Recognition of Traffic Lights for Autonomous Vehicles Using CNN",
    authors: ["Hayl Khadhami", "Co-authors"],
    status: "published",
    publicationDate: "2022-06-15",
    journal: "IEEE Conference",
    paperLink: "https://example.com/paper1",
    description: "CNN-based approach for real-time traffic light recognition in autonomous vehicle systems.",
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Automated Rural Road Restoration Using Unmanned Ground Vehicles with Drone-Assisted 3D Mapping and Deep Learning Defect Identification",
    authors: ["Hayl Khadhami", "Co-authors"],
    status: "under-review",
    publicationDate: "2024-01-01",
    journal: "Under Review",
    paperLink: null,
    description: "Integration of UGVs and drones with deep learning for automated road restoration and defect detection.",
    displayOrder: 2,
  },
  {
    id: 3,
    title: "Harnessing UAVs and Artificial Intelligence for Precision Agriculture: A Review of Emerging Technologies and Future Prospects",
    authors: ["Hayl Khadhami", "Co-authors"],
    status: "under-review",
    publicationDate: "2024-01-01",
    journal: "Under Review",
    paperLink: null,
    description: "Comprehensive review of UAV and AI applications in modern precision agriculture.",
    displayOrder: 3,
  },
];

export const skillsData = [
  // Simulation & Design
  { id: 1, name: "ANSYS Maxwell", category: "Simulation & Design", proficiency: "expert", displayOrder: 1 },
  { id: 2, name: "COMSOL", category: "Simulation & Design", proficiency: "expert", displayOrder: 2 },
  { id: 3, name: "SolidWorks", category: "Simulation & Design", proficiency: "advanced", displayOrder: 3 },
  { id: 4, name: "MATLAB/Simulink", category: "Simulation & Design", proficiency: "advanced", displayOrder: 4 },
  { id: 5, name: "Eplan E3 Series", category: "Simulation & Design", proficiency: "advanced", displayOrder: 5 },
  { id: 6, name: "PCB Design (Proteus, Eagle)", category: "Simulation & Design", proficiency: "advanced", displayOrder: 6 },
  
  // Control & Automation
  { id: 7, name: "PLC Programming (Siemens, Mitsubishi, Omron)", category: "Control & Automation", proficiency: "expert", displayOrder: 1 },
  { id: 8, name: "SCADA Systems", category: "Control & Automation", proficiency: "expert", displayOrder: 2 },
  { id: 9, name: "HMI Development", category: "Control & Automation", proficiency: "advanced", displayOrder: 3 },
  { id: 10, name: "OPC UA & MQTT", category: "Control & Automation", proficiency: "advanced", displayOrder: 4 },
  { id: 11, name: "Digital Twin Development", category: "Control & Automation", proficiency: "advanced", displayOrder: 5 },
  { id: 12, name: "IoT Integration", category: "Control & Automation", proficiency: "intermediate", displayOrder: 6 },
  
  // Data & AI Tools
  { id: 13, name: "Python (SciPy, NumPy)", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 1 },
  { id: 14, name: "TensorFlow & Deep Learning", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 2 },
  { id: 15, name: "Data Analytics (SPSS)", category: "Data & AI Tools", proficiency: "intermediate", displayOrder: 3 },
  { id: 16, name: "CNN Pattern Recognition", category: "Data & AI Tools", proficiency: "advanced", displayOrder: 4 },
  { id: 17, name: "Jupyter Lab & Kaggle", category: "Data & AI Tools", proficiency: "intermediate", displayOrder: 5 },
  
  // Programming Languages
  { id: 18, name: "C++", category: "Programming Languages", proficiency: "advanced", displayOrder: 1 },
  { id: 19, name: "C#", category: "Programming Languages", proficiency: "advanced", displayOrder: 2 },
  { id: 20, name: "Assembly", category: "Programming Languages", proficiency: "intermediate", displayOrder: 3 },
  { id: 21, name: "Embedded Systems (AVR, PIC)", category: "Programming Languages", proficiency: "advanced", displayOrder: 4 },
];
