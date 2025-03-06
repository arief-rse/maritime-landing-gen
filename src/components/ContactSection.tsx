
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-maritime-100 px-3 py-1 text-sm font-medium text-maritime-800 mb-4">
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-maritime-950 mb-6">
            Get in Touch with MONA
          </h2>
          <p className="text-lg text-gray-700">
            Have questions about our courses or certification process? Our team is here to help.
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-maritime-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-maritime-900">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="focus:border-maritime-800 focus:ring-maritime-800"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="focus:border-maritime-800 focus:ring-maritime-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Enter message subject"
                  className="focus:border-maritime-800 focus:ring-maritime-800"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[150px] focus:border-maritime-800 focus:ring-maritime-800"
                />
              </div>
              
              <Button className="w-full bg-maritime-800 hover:bg-maritime-700">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-maritime-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-maritime-100 rounded-full p-3 text-maritime-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-maritime-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      Maritime Headquarters, 123 Harbor Avenue<br />
                      Port City, PC 10000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-maritime-100 rounded-full p-3 text-maritime-800">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-maritime-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      info@mona-academy.com<br />
                      support@mona-academy.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-maritime-100 rounded-full p-3 text-maritime-800">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-maritime-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      +1 (234) 567-8900<br />
                      +1 (234) 567-8901
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-maritime-900 text-white rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-maritime-100" />
                <h4 className="text-lg font-medium">Quick Inquiry</h4>
              </div>
              <p className="text-maritime-100 mb-6">
                Need immediate assistance? Our customer support team is available to answer your questions 
                about certification, course registration, or technical issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-maritime-400"></div>
                  <span className="text-maritime-100">Monday to Friday: 9 AM - 6 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-maritime-400"></div>
                  <span className="text-maritime-100">Saturday: 9 AM - 2 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-maritime-400"></div>
                  <span className="text-maritime-100">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
