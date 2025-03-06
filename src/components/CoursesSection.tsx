
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Anchor, Navigation } from "lucide-react";

const courses = [
  {
    title: "Certificate of Recognition (COR)",
    description: "Mandatory course for foreign Certificate of Competency holders intending to work on vessels.",
    icon: Anchor,
    level: "Essential",
    duration: "4 weeks",
    featured: true,
  },
  {
    title: "Maritime Safety Procedures",
    description: "Comprehensive training on safety protocols and emergency procedures for maritime operations.",
    icon: Ship,
    level: "Intermediate",
    duration: "6 weeks",
    featured: false,
  },
  {
    title: "Navigation and Communication",
    description: "Advanced course on maritime navigation systems and communication protocols.",
    icon: Navigation,
    level: "Advanced",
    duration: "8 weeks",
    featured: false,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-maritime-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-maritime-100 px-3 py-1 text-sm font-medium text-maritime-800 mb-4">
            <span>Our Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-maritime-950 mb-6">
            Explore Our Maritime Courses
          </h2>
          <p className="text-lg text-gray-700">
            Discover our range of maritime courses designed to enhance your skills and advance
            your career in the maritime industry. All courses are officially recognized and
            meet international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${course.featured ? 'border-maritime-300 shadow-md' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="bg-maritime-100 p-3 rounded-lg text-maritime-800">
                    <course.icon className="h-6 w-6" />
                  </div>
                  {course.featured && (
                    <Badge className="bg-maritime-700 hover:bg-maritime-600">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold mt-4 text-maritime-900">{course.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-full bg-maritime-300 mr-2"></span>
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-full bg-maritime-300 mr-2"></span>
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full mt-2 border-maritime-800 text-maritime-800 hover:bg-maritime-50">
                  View Course Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-maritime-800 hover:bg-maritime-700">View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
