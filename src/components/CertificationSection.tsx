
import { Award, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationSection = () => {
  return (
    <section id="certification" className="py-20 bg-maritime-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-maritime-800/30 px-3 py-1 text-sm font-medium text-maritime-100 mb-4">
              <span>Certification Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who Needs a MONA Certificate?
            </h2>
            <p className="text-lg text-maritime-100">
              As of April 15, 2017, all foreign Certificate of Competency (COC) holders intending 
              to work on vessels are required to pass the MONA course to apply for COR. MONA is 
              an online course recognized by the Marine Department to ensure compliance and 
              validate competency.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-800/30 p-1">
                  <Check className="h-4 w-4 text-maritime-100" />
                </div>
                <span className="text-maritime-100">
                  Required for all foreign COC holders working on vessels
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-800/30 p-1">
                  <Check className="h-4 w-4 text-maritime-100" />
                </div>
                <span className="text-maritime-100">
                  Online assessment with official recognition by the Marine Department
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-maritime-800/30 p-1">
                  <Check className="h-4 w-4 text-maritime-100" />
                </div>
                <span className="text-maritime-100">
                  Certificate valid for one year with annual recertification requirement
                </span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-white text-maritime-950 hover:bg-maritime-100">
                Get Certificate
              </Button>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-maritime-800 to-maritime-900 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Award className="h-6 w-6" />
                Certificate Assessment
              </h3>
              <p className="text-maritime-100 mb-6">
                To receive your MONA certification, complete the online assessment. Each 
                certificate is valid for one year, after which recertification is required to maintain 
                compliance.
              </p>
              <div className="space-y-6">
                <div className="bg-maritime-800/30 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-maritime-700/50 rounded-full p-2 mt-1">
                      <FileText className="h-5 w-5 text-maritime-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Online Assessment</h4>
                      <p className="text-maritime-200 text-sm">
                        Complete a comprehensive online assessment to demonstrate your knowledge
                        of maritime regulations and safety procedures.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-maritime-800/30 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-maritime-700/50 rounded-full p-2 mt-1">
                      <Award className="h-5 w-5 text-maritime-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Certificate Issuance</h4>
                      <p className="text-maritime-200 text-sm">
                        Upon successful completion, you will receive your official MONA certificate, 
                        recognized by the Marine Department.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-maritime-800/30 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-maritime-700/50 rounded-full p-2 mt-1">
                      <FileText className="h-5 w-5 text-maritime-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Annual Renewal</h4>
                      <p className="text-maritime-200 text-sm">
                        Certificates must be renewed annually to ensure continued compliance with 
                        current maritime regulations and standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-maritime-200 italic">
                  Important: Please ensure eligibility before registering, as all fees are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
