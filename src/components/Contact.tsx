import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID!,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
  formRef.current!,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
)

      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect & Collaborate</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm passionate about creating innovative solutions and would love to discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "simranbaj2000@gmail.com",
                    href: "mailto:simranbaj2000@gmail.com",
                    color: "text-blue-500"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91-9462004202",
                    href: "tel:+919462004202",
                    color: "text-green-500"
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Singhana, Rajasthan",
                    href: "#",
                    color: "text-purple-500"
                  }
                ].map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-[1.03] shadow-sm"
                    >
                      <IconComponent className={`h-6 w-6 ${info.color}`} />
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                        <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    href: "https://github.com/Simran759",
                    color: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/simran-3b680128a/",
                    color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-110 shadow-sm ${social.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Box */}
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 border-none text-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Want to Collaborate?</h4>
                <p className="text-blue-100 mb-4">Let’s discuss your next big idea or project.</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Start Conversation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Fill out the form and I’ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" name="first_name" required />
                  <Input placeholder="Last Name" name="last_name" required />
                </div>
                <Input type="email" placeholder="Email" name="user_email" required />
                <Input placeholder="Subject" name="user_subject" required />
                <Textarea placeholder="Your message..." rows={5} name="message" required />

                <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {loading ? "Sending..." : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {sent && (
                  <div className="flex items-center justify-center text-green-600 dark:text-green-400 mt-4">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message sent successfully!
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
