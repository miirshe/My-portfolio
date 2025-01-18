import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layout,
  Smartphone,
  Palette,
  Database,
  Server,
  GitBranch,
  Layers,
} from "lucide-react";

export function TechStack() {
  const stack = {
    frontend: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
    mobile: ["React Native with NativeWind"],
    ui: ["Shadcn UI", "Bootstrap", "Material-UI", "Tailwind CSS"],
    state: ["Redux Toolkit", "RTK Query", "Zustand"],
    backend: ["Node.js", "Express.js", "NestJS with Microservices"],
    database: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
    orm: ["Mongoose", "Prisma", "Sequelize"],
    deployment: ["Git", "GitHub", "Vercel", "Netlify"],
  };

  return (
    <div className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-lg" />
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Tech Stack & Tools
        </h2>
        <div className="space-y-8">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Layout className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.frontend.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.mobile.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">UI/UX</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.ui.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">State Management</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.state.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Server className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.backend.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Databases & ORMs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.database.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
                {stack.orm.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  Version Control & Deployment
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.deployment.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="group-hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
