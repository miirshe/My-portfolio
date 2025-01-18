import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Calendar } from "lucide-react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;
export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "January 18, 2025"; // Update this manually when you update your CV

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 18}>
      <footer className="mt-16 pb-8">
        <Card className="bg-primary/5">
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Feel free to reach out for opportunities or just to say hi!
                  </p>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    miirshe@gmail.com
                  </Button>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Download CV</h2>
                  <p className="text-muted-foreground">
                    Get a copy of my latest CV to learn more about my skills and
                    experience.
                  </p>
                  <Button className="w-full sm:w-auto" asChild>
                    <a
                      href={DATA.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
                <p>© {currentYear} Abdikafi Isse Isak. All rights reserved.</p>
                <p className="mt-2 flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </BlurFade>
  );
}
