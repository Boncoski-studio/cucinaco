import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Award, Users, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationDialog from '@/components/ReservationDialog';

const About = () => {
  const [reservationOpen, setReservationOpen] = useState(false);

  const values = [
    {
      icon: UtensilsCrossed,
      title: 'Artisan Craft',
      description: 'Every dish is meticulously crafted using traditional techniques passed down through generations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We source only the finest ingredients from local farms and trusted Italian suppliers.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our restaurant is a gathering place where memories are made and connections are formed.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every meal, treating each guest like family.',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header onBookTable={() => setReservationOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')`,
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-cream mb-6"
          >
            About Cucina & Co.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            A celebration of Italian culinary tradition, reimagined with modern elegance
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Restaurant interior"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl text-charcoal">
                A Legacy of <span className="text-gold italic">Flavor</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                Founded in 2015, Cucina & Co. was born from a dream to bring the authentic 
                flavors of Italy to the heart of New York. Our founder, Chef Marco Benedetti, 
                grew up in the kitchens of his grandmother's trattoria in Tuscany, where he 
                learned that great food is made with love, patience, and the finest ingredients.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Today, we continue that tradition, blending time-honored recipes with 
                contemporary techniques to create dishes that honor the past while 
                embracing the future. Every plate that leaves our kitchen tells a story—
                of heritage, of craftsmanship, and of the deep connections that food creates.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                We invite you to join our table, where strangers become friends and 
                every meal is a celebration of life's simple pleasures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 space-y-6"
            >
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Executive Chef
              </span>
              <h2 className="font-display text-4xl text-cream">
                Chef Marco Benedetti
              </h2>
              <p className="text-cream/70 leading-relaxed">
                With over 25 years of culinary experience spanning three continents, 
                Chef Marco brings a unique perspective to Italian cuisine. Trained at 
                the prestigious Culinary Institute of Florence and mentored by 
                Michelin-starred chefs across Europe, he combines classical techniques 
                with innovative presentations.
              </p>
              <p className="text-cream/70 leading-relaxed">
                "Cooking is not just about feeding people—it's about creating moments 
                that they'll remember forever. Every ingredient has a story, and it's 
                my job to tell that story on the plate."
              </p>
              <p className="text-gold italic font-display text-lg">
                — Marco Benedetti
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef Marco Benedetti"
                className="rounded-2xl shadow-gold w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              What We Believe
            </span>
            <h2 className="font-display text-4xl text-charcoal">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal/60 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-charcoal/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Our Space
            </span>
            <h2 className="font-display text-4xl text-charcoal">
              Inside Cucina & Co.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
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

export default About;
