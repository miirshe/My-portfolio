import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Terminal, Code2 } from 'lucide-react';

export function TechPreferences() {
  return (
    <div className="py-12 relative ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg" />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Tech Preferences
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 cursor-pointer">
                <div className="mb-4">
                  <Monitor className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Operating System</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="group-hover:bg-primary/5">Windows</Badge>
                  <Badge variant="outline" className="group-hover:bg-primary/5">macOS</Badge>
                  <Badge variant="outline" className="group-hover:bg-primary/5">Linux</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 cursor-pointer">
                <div className="mb-4">
                  <Terminal className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Terminal</h3>
                <Badge variant="outline" className="group-hover:bg-primary/5">PowerShell</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 cursor-pointer">
                <div className="mb-4">
                  <Code2 className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Editor</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="group-hover:bg-primary/5">VSCode</Badge>
                  <Badge variant="outline" className="group-hover:bg-primary/5">Windsurf</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
