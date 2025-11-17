import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { data: projects, isLoading } = trpc.portfolio.getProjects.useQuery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (projects) {
      const cats = Array.from(new Set(projects.map((p) => p.category))).sort();
      setCategories(cats);
      if (!selectedCategory && cats.length > 0) {
        setSelectedCategory(null);
      }
    }
  }, [projects, selectedCategory]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const filteredProjects = selectedCategory
    ? projects?.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Projects & Works</h1>
        <p className="text-lg text-foreground/70 mb-12">
          A showcase of my professional projects spanning industrial automation, research, and software development
        </p>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="bg-primary hover:bg-primary/90"
          >
            All Projects
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects?.map((project, idx) => {
            const technologies = Array.isArray(project.technologies)
              ? project.technologies
              : typeof project.technologies === "string"
              ? JSON.parse(project.technologies)
              : [];

            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {project.imageUrl && (
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "";
                        e.currentTarget.parentElement!.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center text-foreground/40">No Image</div>';
                      }}
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>

                  {technologies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground/60 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech: string, tidx: number) => (
                          <span
                            key={tidx}
                            className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.externalLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 w-full"
                      asChild
                    >
                      <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {(!filteredProjects || filteredProjects.length === 0) && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Project Highlights */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-foreground/80">Automation Systems Designed & Implemented</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <p className="text-foreground/80">Average Production Efficiency Improvement</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">15-25%</div>
              <p className="text-foreground/80">Energy Recovery in VAGECRB Research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
