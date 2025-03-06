
import { Anchor, Ship, Compass, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Ship,
    title: "Maritime Certification",
    description:
      "Comprehensive certification programs recognized by the Marine Department to validate your maritime competency.",
  },
  {
    icon: Compass,
    title: "Expert Instruction",
    description:
      "Learn from industry professionals with extensive experience in maritime operations and safety protocols.",
  },
  {
    icon: Navigation,
    title: "Global Recognition",
    description:
      "Our certificates are recognized internationally, allowing you to work on vessels around the world.",
  },
  {
    icon: Anchor,
    title: "Self-Paced Learning",
    description:
      "Complete your courses online at your own pace, with 24/7 access to educational materials.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-maritime-100 px-3 py-1 text-sm font-medium text-maritime-800 mb-4">
            <span>About MONA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-maritime-950 mb-6">
            Excellence in Maritime Education
          </h2>
          <p className="text-lg text-gray-700">
            MONA is the premier platform designed to facilitate the Certification of
            Recognition (COR) for foreign Certificate of Competency (COC) holders seeking
            to work on vessels. Our latest version offers a seamless experience with
            upgraded features and faster processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="maritime-card group hover:-translate-y-2"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-maritime-100 text-maritime-800 group-hover:bg-maritime-800 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-maritime-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-maritime-100 px-3 py-1 text-sm font-medium text-maritime-800">
              <span>Authorized by Marine Department</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-maritime-950">
              Why Choose MONA?
            </h2>
            <p className="text-lg text-gray-700">
              Completion of MONA certification is mandatory for COC holders and is officially 
              recognized by the Marine Department. Successful completion will be reflected 
              in the official system.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-100 p-1">
                  <svg className="h-4 w-4 text-maritime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Officially recognized certification that meets international standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-100 p-1">
                  <svg className="h-4 w-4 text-maritime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Modern platform with user-friendly interface and resources
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-100 p-1">
                  <svg className="h-4 w-4 text-maritime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Fast processing and validation of your maritime competency
                </span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="bg-maritime-50 rounded-lg p-8 relative z-10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-maritime-800 mb-4">20,000+</div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-900">Successful Certifications</h3>
              <p className="text-gray-600">
                Join over 20,000 maritime professionals who have successfully completed 
                their certification through our platform, advancing their careers in the
                maritime industry.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-0 -top-6 -right-6 w-full h-full border-2 border-maritime-200 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-maritime-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
