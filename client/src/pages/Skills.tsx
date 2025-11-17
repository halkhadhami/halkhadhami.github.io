import { useState, useMemo } from "react";
import { skillsData } from "@/data/portfolio-data";

const proficiencyColors = {
  beginner: "bg-blue-100 text-blue-800",
  intermediate: "bg-cyan-100 text-cyan-800",
  advanced: "bg-green-100 text-green-800",
  expert: "bg-purple-100 text-purple-800"
};

const categoryIcons = {
  "Simulation & Design": "🎨",
  "Control & Automation": "⚙️",
  "Data & AI Tools": "🤖",
  "Programming Languages": "💻"
};

export default function Skills() {
  const groupedSkills = useMemo(() => {
    return skillsData.reduce((acc: Record<string, any[]>, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
  }, []);

  const categories = useMemo(() => Object.keys(groupedSkills).sort(), [groupedSkills]);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Technical Skills</h1>
        <p className="text-lg text-foreground/70 mb-12">
          A comprehensive overview of my technical expertise across simulation, automation, data science, and programming
        </p>

        <div className="space-y-12">
          {categories.map((category: string) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{categoryIcons[category as keyof typeof categoryIcons] || "📌"}</span>
                <h2 className="text-3xl font-bold text-primary">{category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedSkills[category].map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground text-lg">{skill.name}</h3>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full capitalize ${
                          proficiencyColors[skill.proficiency as keyof typeof proficiencyColors] || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          skill.proficiency === "expert"
                            ? "bg-purple-500 w-full"
                            : skill.proficiency === "advanced"
                            ? "bg-green-500 w-3/4"
                            : skill.proficiency === "intermediate"
                            ? "bg-cyan-500 w-1/2"
                            : "bg-blue-500 w-1/4"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Skills Summary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">Core Competencies</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Industrial Automation & Control Systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>PLC/HMI/SCADA Programming</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Multiphysics Simulation (FEA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Digital Twin Development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Embedded Systems Design</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">Specialized Areas</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Deep Learning & CNN Pattern Recognition</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Electrical Control Panel Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Research Methodologies & Academic Writing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Project Management & Quality Control</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Technical Teaching & Mentoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
