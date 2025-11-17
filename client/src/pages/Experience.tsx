import { Button } from "@/components/ui/button";
import { Briefcase, Award, BookOpen } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Assistant Lecturer",
      company: "Hodeidah University",
      period: "August 2014 - Present",
      duration: "6+ Years",
      icon: BookOpen,
      description: "Teaching and administering a wide range of courses for IT department including image processing, programming languages (C++, C#, Assembly), electronics, digital design, and embedded systems.",
      achievements: [
        "Taught 15+ technical courses to 500+ students",
        "Developed hands-on lab sessions and practical exercises",
        "Mentored students in PLC, SCADA, and embedded systems",
        "Created course materials and assessments"
      ]
    },
    {
      role: "Automation Software Engineer",
      company: "Yemen Dairy and Food Products Company",
      period: "January 2014 - Present",
      duration: "10+ Years",
      icon: Briefcase,
      description: "Designing, writing, installing, and maintaining automated control systems for various industrial machines including PLC, HMI, and SCADA systems.",
      achievements: [
        "Designed and implemented 20+ automation systems",
        "Reduced production downtime by 30% through system optimization",
        "Managed electrical control panels for complex machinery",
        "Implemented power projects and electrical wiring solutions"
      ]
    },
    {
      role: "Electrical Technician",
      company: "Various Industrial Facilities",
      period: "January 2012 - December 2013",
      duration: "2 Years",
      icon: Briefcase,
      description: "Design, installation, and maintenance of electrical control panels and implementation of electrical projects.",
      achievements: [
        "Installed and maintained electrical systems for 10+ facilities",
        "Designed electrical control diagrams and schematics",
        "Performed cable wiring and connection work",
        "Troubleshot and resolved electrical system issues"
      ]
    },
    {
      role: "Machines Operator",
      company: "Industrial Operations",
      period: "December 2009 - December 2011",
      duration: "2 Years",
      icon: Briefcase,
      description: "Operation, monitoring, and maintenance of steam boilers and air compressors.",
      achievements: [
        "Operated steam boilers and air compressors safely",
        "Monitored system performance and efficiency",
        "Performed preventive maintenance schedules",
        "Maintained detailed operational logs"
      ]
    }
  ];

  const recognitions = [
    {
      title: "Outstanding International Master Student Award",
      year: "2022",
      description: "Recognized for exceptional academic performance and research contributions during master's studies"
    },
    {
      title: "Best Paper Award - Postgraduate Category",
      year: "2022",
      description: "Oral presentation at IEEE Student Conference on Engineering Science and Technology (SCONEST) 2022"
    },
    {
      title: "Open-Source Contributor",
      year: "Ongoing",
      description: "Active contributor to open-source projects with published code and educational YouTube videos"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Professional Experience */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-primary mb-4">Professional Experience</h1>
          <p className="text-lg text-foreground/70 mb-12">10+ years of hands-on experience in industrial automation and engineering</p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                        <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-lg text-foreground/80 font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
                      <p className="text-foreground/80 mb-4">{exp.description}</p>
                      
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h4 className="font-bold text-primary mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, aidx) => (
                            <li key={aidx} className="flex gap-3 text-foreground/80">
                              <span className="text-secondary font-bold">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((recognition, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{recognition.title}</h3>
                    <p className="text-sm text-secondary font-medium">{recognition.year}</p>
                  </div>
                </div>
                <p className="text-foreground/80">{recognition.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
