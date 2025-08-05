import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">Software Development Engineering Intern</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Building className="w-4 h-4" />
                  <span className="font-semibold">Amazon</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2025 - Jun 2025</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              <p>• Worked in a collaborative engineering environment to improve and support tools within a production-scale distributed system.</p>
              <p>• Fixed a critical bug in a production system, ensuring stability and reducing downtime.</p>
              <p>• Enabled testing on production for a new service by integrating AWS Lambda, S3, and other cloud services.</p>
              <p>• Optimized API performance and implemented A/B testing to measure effectiveness of improvements.</p>
              <p>• Backfilled data from DynamoDB to a database using an optimized pipeline, enabling downstream analytics and dashboarding.</p>
              <p>• Upgraded legacy components to integrate with a new consolidation architecture by modifying existing Lambdas and adding a polling Lambda for DynamoDB with fixed intervals.</p>
              <p>• Performed JDK migration to ensure compatibility and performance in evolving environments.</p>
              <p>• Developed hands-on experience in incident mitigation, system monitoring, and live production debugging.</p>
              <p>• Practiced incremental development and engaged with multiple stakeholders to define and refine implementation plans.</p>
              <p>• Earned AWS Technical Essentials certification, enhancing understanding of scalable and secure cloud systems.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge>AWS</Badge>
              <Badge>Lambda</Badge>
              <Badge>DynamoDB</Badge>
              <Badge>Java</Badge>
              <Badge>System Design</Badge>
              <Badge>Production Systems</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;