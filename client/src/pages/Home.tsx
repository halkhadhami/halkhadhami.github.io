import { APP_TITLE, APP_LOGO, SITE_DESCRIPTION, OWNER_NAME, OWNER_EMAIL, OWNER_PHONE, OWNER_LOCATION } from "@/const";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={APP_LOGO} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="font-bold text-lg text-primary">Hayl Khadhami</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("home")} className={`capitalize font-medium transition-colors ${activeSection === "home" ? "text-primary" : "text-foreground hover:text-primary"}`}>Home</button>
              <button onClick={() => scrollToSection("about")} className={`capitalize font-medium transition-colors ${activeSection === "about" ? "text-primary" : "text-foreground hover:text-primary"}`}>About</button>
              <button onClick={() => scrollToSection("research")} className={`capitalize font-medium transition-colors ${activeSection === "research" ? "text-primary" : "text-foreground hover:text-primary"}`}>Research</button>
              <a href="/experience" className="capitalize font-medium text-foreground hover:text-primary transition-colors">Experience</a>
              <a href="/skills" className="capitalize font-medium text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="/projects" className="capitalize font-medium text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="/publications" className="capitalize font-medium text-foreground hover:text-primary transition-colors">Publications</a>
              <button onClick={() => scrollToSection("contact")} className={`capitalize font-medium transition-colors ${activeSection === "contact" ? "text-primary" : "text-foreground hover:text-primary"}`}>Contact</button>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              PhD Researcher & Automation Engineer
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Bridging 10+ Years of Industry Experience with Cutting-Edge Research
            </p>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("research")} className="bg-primary hover:bg-primary/90">
                View Research
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <a href="https://github.com/halkhadhami" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://facebook.com/haylkhadhami" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={28} />
              </a>
              <a href={`mailto:${OWNER_EMAIL}`} className="text-foreground/60 hover:text-primary transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection("about")} className="text-primary/60 hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">Hayl</div>
                <p className="text-foreground/70">PhD Researcher</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80">
                I am a dedicated PhD researcher at Chang'an University's School of Construction Machinery, specializing in Mechanical Engineering with a focus on Manufacturing Automation. My research centers on innovative electromechanical systems, digital twins, and energy-efficient automation technologies.
              </p>
              <p className="text-lg text-foreground/80">
                With over 10 years of hands-on experience in the automation industry, I bring a unique blend of practical expertise and cutting-edge research knowledge. My background spans industrial automation, PLC/HMI/SCADA systems, embedded systems, and advanced manufacturing technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <p className="text-sm text-foreground/70">Degrees</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent">4</div>
                  <p className="text-sm text-foreground/70">Languages</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2.8K</div>
                  <p className="text-sm text-foreground/70">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Research Highlights</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Variable Air-Gap Eddy Current Regenerative Brake (VAGECRB)</h3>
            <p className="text-lg text-foreground/80 mb-6">
              Transforming Wasted Energy into Usable Power
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">15-25%</div>
                <p className="text-foreground/70">Energy Recovery per Cycle</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">100 tons</div>
                <p className="text-foreground/70">CO₂ Reduction per Crane per Year</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-primary">Core Innovation</h4>
              <p className="text-foreground/80">
                An adaptive air-gap mechanism for precise torque control, enabling real-time energy recovery optimization through counter-rotating Halbach magnetic discs.
              </p>

              <h4 className="text-xl font-bold text-primary mt-6">Key Technologies</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Multiphysics FEA (ANSYS & COMSOL)</li>
                <li>SCADA Integration</li>
                <li>Predictive Digital Twin</li>
                <li>Advanced Control Systems</li>
              </ul>

              <h4 className="text-xl font-bold text-primary mt-6">Research Methodology</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Theoretical Modeling", "FEA Simulation", "Prototype Build", "Smart Integration", "Validation"].map((phase, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{idx + 1}</div>
                    <p className="text-sm font-medium text-foreground/70">{phase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                degree: "PhD Mechanical Engineering",
                school: "Chang'an University, China",
                year: "2024 - Present",
                gpa: "GPA: 92.5%",
                focus: "Manufacturing Automation, Electromechanical Systems, Digital Twins"
              },
              {
                degree: "M.Eng Industrial Automation",
                school: "Dawood University, Pakistan",
                year: "2023",
                gpa: "GPA: 92.5%",
                focus: "PLC, SCADA, AI-CNN Pattern Recognition, Research Methodologies"
              },
              {
                degree: "B.E Computer Engineering",
                school: "Hodeidah University, Yemen",
                year: "2013",
                gpa: "CGPA: 83%",
                focus: "Embedded Systems, Digital Design, Electronics"
              }
            ].map((edu, idx) => (
              <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-foreground/70 font-medium">{edu.school}</p>
                  <p className="text-sm text-foreground/60">{edu.year}</p>
                  <p className="text-sm text-foreground/60 mt-1">{edu.gpa}</p>
                  <p className="text-foreground/80 mt-2">{edu.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href={`mailto:${OWNER_EMAIL}`} className="text-foreground/70 hover:text-primary transition-colors">
                  {OWNER_EMAIL}
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a href={`tel:${OWNER_PHONE}`} className="text-foreground/70 hover:text-primary transition-colors">
                  {OWNER_PHONE}
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-foreground/70">{OWNER_LOCATION}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Github className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">GitHub</h3>
                <a href="https://github.com/halkhadhami" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                  halkhadhami
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              <p className="text-foreground/80 mb-6">Feel free to reach out via email or connect with me on social media for collaborations and inquiries.</p>
              <div className="space-y-3">
                <a href={`mailto:${OWNER_EMAIL}`} className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Send Email</span>
                </a>
                <a href="https://github.com/halkhadhami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">GitHub Profile</span>
                </a>
                <a href="https://facebook.com/haylkhadhami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 transition-colors">
                  <Facebook className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Facebook</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#research" className="hover:text-primary transition-colors">Research</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4">Follow</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/halkhadhami" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href="https://facebook.com/haylkhadhami" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4">Contact</h4>
                <p className="text-sm text-foreground/70">{OWNER_EMAIL}</p>
                <p className="text-sm text-foreground/70">{OWNER_PHONE}</p>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
              <p>&copy; 2025 {OWNER_NAME}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
