import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface HeaderProps {
  onBookTable: () => void;
}

const Header = ({ onBookTable }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/delivery', label: 'Delivery' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (to: string) => {
    if (to === '/#menu') {
      if (location.pathname === '/') {
        const menuSection = document.getElementById('menu');
        menuSection?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
        <Link to="/" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-6 h-6 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl text-cream font-semibold tracking-wide">
            Cucina & Co.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.to === '/#menu' ? (
              <Link
                key={link.to}
                to="/"
                onClick={() => handleNavClick(link.to)}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            onClick={onBookTable}
            className="hidden sm:flex bg-gold hover:bg-gold-light text-charcoal font-medium px-6 shadow-gold transition-all hover:shadow-lg hover:scale-105"
          >
            Book Table
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-cream hover:bg-cream/10"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal border-charcoal w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8 pt-4">
                  <UtensilsCrossed className="w-6 h-6 text-gold" />
                  <span className="font-display text-xl text-cream font-semibold">
                    Cucina & Co.
                  </span>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      {link.to === '/#menu' ? (
                        <Link
                          to="/"
                          onClick={() => {
                            setTimeout(() => {
                              const menuSection = document.getElementById('menu');
                              menuSection?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }}
                          className="text-cream/80 hover:text-gold transition-colors text-lg font-medium tracking-wide py-2"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-cream/80 hover:text-gold transition-colors text-lg font-medium tracking-wide py-2"
                        >
                          {link.label}
                        </Link>
                      )}
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button 
                      onClick={onBookTable}
                      className="w-full bg-gold hover:bg-gold-light text-charcoal font-medium py-6 shadow-gold"
                    >
                      Book a Table
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
