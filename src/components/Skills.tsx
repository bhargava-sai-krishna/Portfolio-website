import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C/C++", "HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "SocketIO", "TensorFlow", "MERN Stack", "OpenCV", "Keras", "Scikit-learn", "Node.js", "JUnit", "Angular", "Vite", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "GitHub", "Postman", "Jupyter Notebook", "Google Cloud"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Work", "Problem Solving", "Communication", "Leadership", "Adaptability", "Attention to Detail"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;