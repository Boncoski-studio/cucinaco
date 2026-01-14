import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, Phone, MessageCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationDialog from '@/components/ReservationDialog';
import { MENU_ITEMS, CATEGORIES } from '@/data/menuData';

const Delivery = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const deliveryInfo = [
    {
      icon: Clock,
      title: 'Delivery Time',
      description: '30-45 minutes',
    },
    {
      icon: MapPin,
      title: 'Delivery Area',
      description: 'Up to 5 miles radius',
    },
    {
      icon: Truck,
      title: 'Delivery Fee',
      description: '$5 (Free over $50)',
    },
  ];

  // Filter items that can be delivered (excluding some dolci that don't travel well)
  const deliverableItems = MENU_ITEMS.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hi! I'd like to place a delivery order.");
    window.open(`https://wa.me/12125551234?text=${message}`, '_blank');
  };

  const handlePhoneOrder = () => {
    window.open('tel:+12125551234', '_self');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header onBookTable={() => setReservationOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1920&q=80')`,
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6"
          >
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Now Delivering</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-cream mb-6"
          >
            Delivery & Takeaway
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto mb-8"
          >
            Enjoy authentic Italian cuisine in the comfort of your home
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleWhatsAppOrder}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-8 py-6 text-base transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order via WhatsApp
            </Button>
            <Button
              onClick={handlePhoneOrder}
              variant="outline"
              className="border-gold/50 bg-transparent text-cream hover:bg-gold/10 hover:border-gold px-8 py-6 text-base transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call to Order
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 border-b border-charcoal/10">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {deliveryInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">{info.title}</h3>
                  <p className="text-charcoal/60 text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Delivery Menu
            </span>
            <h2 className="font-display text-4xl text-charcoal">
              Order Your Favorites
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-charcoal text-cream'
                    : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverableItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-elegant transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-cream/90 text-charcoal text-xs px-2 py-1 rounded-full"
                        >
                          {tag === 'vegetarian' ? '🌱' : '🌾'}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-lg text-charcoal">
                        {item.name}
                      </h3>
                      <span className="text-gold font-semibold">${item.price}</span>
                    </div>
                    <p className="text-charcoal/60 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream transition-all"
                      onClick={handleWhatsAppOrder}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add to Order
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-10 bg-charcoal rounded-2xl"
          >
            <h3 className="font-display text-3xl text-cream mb-4">
              Ready to Order?
            </h3>
            <p className="text-cream/70 mb-6 max-w-md mx-auto">
              Contact us via WhatsApp or phone to place your delivery order. 
              We'll confirm your order and provide an estimated delivery time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppOrder}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
              <Button
                onClick={handlePhoneOrder}
                className="bg-gold hover:bg-gold-light text-charcoal font-medium px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                (212) 555-1234
              </Button>
            </div>
          </motion.div>
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

export default Delivery;
