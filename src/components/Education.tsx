import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      location: "Kerala",
      grade: "8.17 CGPA",
      period: "2021 - 2025",
      degree: "B.Tech Computer Science"
    },
    {
      institution: "FIITJEE",
      location: "Vijayawada",
      grade: "9.08 CGPA",
      period: "2019 - 2021",
      degree: "Higher Secondary"
    },
    {
      institution: "Sikhara",
      location: "Vijayawada", 
      grade: "9.3 CGPA",
      period: "2018 - 2019",
      degree: "Secondary School"
    }
  ];

  const certifications = [
    {
      title: "Amazon AWS Technical Essentials",
      issuer: "Amazon Web Services",
      date: "Apr 20, 2025"
    },
    {
      title: "Nvidia Deep Learning",
      issuer: "NVIDIA",
      date: "Nov 09, 2023"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      {edu.institution}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{edu.grade}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Issued {cert.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Achievement</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Amrita Block Camp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">2023</p>
                  <p>Secured a position in top 10 as honorable mention in a hackathon conducted by Amrita Vishwa Vidyapeetham as part of Vidyut multi fest</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;