import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Începe-ți <span className="text-gym-red">Călătoria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ești gata să-ți transformi viața? Contactează-ne astăzi și fă primul
            pas către o viață mai sănătoasă.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-white/10 backdrop-blur-sm border-gym-red/20">
            <div className="h-full w-full aspect-video lg:aspect-square">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.3524118468295!2d25.79938587695038!3d45.86425850665645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b4a51627379679%3A0x733797801759e084!2sFocusGym!5e0!3m2!1shu!2sro!4v1750888154008!5m2!1shu!2sro"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </Card>

          <div className="flex flex-col justify-between h-full space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-gym-red/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Vizitați sala noastră de sport
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    📍 Strada 1 Decembrie 1918 bl 12, Sfântu Gheorghe 520076
                  </p>
                  <p>📞 0742464683</p>
                  <p>✉️ focusgymsepsi@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-gym-red/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Program de funcționare
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span>7:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă</span>
                    <span>9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică</span>
                    <span>9:00 - 20:00</span>
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
