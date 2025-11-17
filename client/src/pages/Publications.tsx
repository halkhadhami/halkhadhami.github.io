import { useMemo } from "react";
import { publicationsData } from "@/data/portfolio-data";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusBadgeColor = {
  published: "bg-green-100 text-green-800",
  "under-review": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800"
};

export default function Publications() {
  const groupedPublications = useMemo(() => {
    return publicationsData.reduce((acc: Record<string, any[]>, pub) => {
      if (!acc[pub.status]) {
        acc[pub.status] = [];
      }
      acc[pub.status].push(pub);
      return acc;
    }, {});
  }, []);

  const statusOrder = useMemo(() => ["published", "under-review", "in-progress"], []);
  const statusLabels = useMemo(() => ({
    published: "Published Papers",
    "under-review": "Under Review",
    "in-progress": "In Progress"
  }), []);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Research Publications</h1>
        <p className="text-lg text-foreground/70 mb-12">
          A collection of my published and ongoing research work in automation, AI, and engineering
        </p>

        <div className="space-y-12">
          {statusOrder.map((status) => {
            const pubs = groupedPublications[status as keyof typeof groupedPublications];
            if (!pubs || pubs.length === 0) {
              return null;
            }

            return (
              <div key={status}>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  {statusLabels[status as keyof typeof statusLabels]}
                </h2>

                <div className="space-y-4">
                  {pubs.map((pub, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-primary"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-primary mb-2">{pub.title}</h3>
                          <p className="text-sm text-foreground/70 mb-2">
                            {Array.isArray(pub.authors) ? pub.authors.join(", ") : pub.authors}
                          </p>
                          {pub.journal && (
                            <p className="text-sm font-medium text-secondary">{pub.journal}</p>
                          )}
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full capitalize whitespace-nowrap ${
                            statusBadgeColor[status as keyof typeof statusBadgeColor]
                          }`}
                        >
                          {status.replace("-", " ")}
                        </span>
                      </div>

                      {pub.description && (
                        <p className="text-foreground/80 mb-4">{pub.description}</p>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        {pub.publicationDate && (
                          <span className="text-sm text-foreground/60">
                            {new Date(pub.publicationDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </span>
                        )}
                        {pub.paperLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            asChild
                          >
                            <a href={pub.paperLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              Read Paper
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Interests */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Research Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-primary mb-3">Primary Focus</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Electromechanical Systems & Energy Recovery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Digital Twin Development & Simulation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Advanced Manufacturing Automation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Sustainable Industrial Systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-3">Applied Technologies</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Deep Learning & Computer Vision</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>IoT & Real-time Control Systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Multiphysics Simulation (FEA/CFD)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Predictive Analytics & AI-driven Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
