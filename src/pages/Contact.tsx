import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationDialog from '@/components/ReservationDialog';

const Contact = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Culinary Lane', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(212) 555-1234', 'Mon-Sun: Available'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@cucinaco.com', 'reservations@cucinaco.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 5PM - 10PM', 'Fri-Sat: 5PM - 11PM', 'Sun: 5PM - 9PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header onBookTable={() => setReservationOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80')`,
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-cream mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out for reservations, events, or just to say hello.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl text-charcoal mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-charcoal/70 text-sm mb-2 block">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-white border-charcoal/20 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-charcoal/70 text-sm mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-white border-charcoal/20 focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-charcoal/70 text-sm mb-2 block">
                    Subject
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="bg-white border-charcoal/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-charcoal/70 text-sm mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={5}
                    className="bg-white border-charcoal/20 focus:border-gold resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-charcoal font-medium px-8 py-6 shadow-gold transition-all hover:shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-display text-3xl text-charcoal mb-6">
                Visit Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-lg text-charcoal mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-charcoal/60 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden h-[300px] bg-charcoal/5 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                  <div className="text-center text-cream">
                    <MapPin className="w-10 h-10 mx-auto mb-2 text-gold" />
                    <p className="font-display text-lg">123 Culinary Lane</p>
                    <p className="text-sm opacity-70">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ReservationDialog 
        open={reservationOpen} 
        onOpenChange={setReservationOpen} 
      />
    </div>
  );
};

export default Contact;
