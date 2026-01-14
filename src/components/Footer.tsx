import { UtensilsCrossed, MapPin, Phone, Mail, Instagram, Facebook, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-gold" />
              <span className="font-display text-xl font-semibold">Cucina & Co.</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              A celebration of Italian culinary tradition, reimagined with modern elegance. 
              Join us for an unforgettable dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Explore</h4>
            <div className="space-y-2 text-sm">
              <Link 
                to="/"
                className="block text-cream/60 hover:text-gold transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block text-cream/60 hover:text-gold transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/delivery"
                className="block text-cream/60 hover:text-gold transition-colors"
              >
                Delivery
              </Link>
              <Link 
                to="/contact"
                className="block text-cream/60 hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Hours</h4>
            <div className="space-y-2 text-sm text-cream/60">
              <p>Monday – Thursday: 5:00 PM – 10:00 PM</p>
              <p>Friday – Saturday: 5:00 PM – 11:00 PM</p>
              <p>Sunday: 5:00 PM – 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Contact</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="#" 
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>123 Culinary Lane, New York, NY 10001</span>
              </a>
              <a 
                href="tel:+12125551234" 
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(212) 555-1234</span>
              </a>
              <a 
                href="mailto:hello@cucinaco.com" 
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@cucinaco.com</span>
              </a>
              <Link 
                to="/delivery"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Truck className="w-4 h-4" />
                <span>Order Delivery</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © 2024 Cucina & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-cream/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
            >
              <Instagram className="w-5 h-5 text-cream/60 group-hover:text-gold" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-cream/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
            >
              <Facebook className="w-5 h-5 text-cream/60 group-hover:text-gold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
