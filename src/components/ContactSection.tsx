import { Mail, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a mock)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'markpetlong@gmail.com',
      link: 'mailto:markpetlong@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/petlong-dakhling-56a0b6177/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I am always open to discussing new projects, research collaborations, or speaking opportunities related to climate, energy, and sustainable development. Please feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-emerald-100">
            <h3 className="mb-6 text-gray-900">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Your Name</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Your Email Address</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What is this regarding?"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Your Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 border-emerald-100">
              <h3 className="mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{item.label}</div>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-emerald-600 to-green-600 text-white border-0">
              <h3 className="mb-4 text-white">Collaboration Opportunities</h3>
              <p className="opacity-90">
                Open to research collaborations, speaking engagements, and partnerships focused on advancing sustainable energy solutions and climate action across Africa.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
