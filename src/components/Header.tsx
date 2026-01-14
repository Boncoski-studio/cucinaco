import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  onBookTable: () => void;
}

const Header = ({ onBookTable }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-header py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-6 h-6 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl text-cream font-semibold tracking-wide">
            Cucina & Co.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#menu" 
            className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
          >
            Menu
          </a>
          <a 
            href="#about" 
            className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
          >
            Contact
          </a>
        </nav>

        <Button 
          onClick={onBookTable}
          className="bg-gold hover:bg-gold-light text-charcoal font-medium px-6 shadow-gold transition-all hover:shadow-lg hover:scale-105"
        >
          Book Table
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
