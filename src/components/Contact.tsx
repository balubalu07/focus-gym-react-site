
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you soon!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-gym-red">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with us today and take the first step towards a healthier you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-gym-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Input
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Button 
                  type="submit"
                  className="w-full bg-gym-red hover:bg-gym-red/80 text-white font-bold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-gym-red/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Visit Our Gym</h3>
                <div className="space-y-3 text-gray-300">
                  <p>📍 123 Fitness Street, Downtown City, DC 12345</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ info@focusgym.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-gym-red/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Opening Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
