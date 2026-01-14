import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookTable: () => void;
}

const Hero = ({ onBookTable }: HeroProps) => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Modern Italian Fine Dining
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight"
        >
          Taste the Art of
          <br />
          <span className="italic text-gold">Modern Italy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          An exquisite culinary journey through Italy's finest traditions, 
          reimagined with contemporary elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onBookTable}
            size="lg"
            className="bg-gold hover:bg-gold-light text-charcoal font-medium px-8 py-6 text-base shadow-gold transition-all hover:shadow-lg hover:scale-105"
          >
            Reserve a Table
          </Button>
          <Button
            onClick={scrollToMenu}
            variant="outline"
            size="lg"
            className="border-gold/50 bg-transparent text-cream hover:bg-gold/10 hover:border-gold px-8 py-6 text-base transition-all"
          >
            Explore Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={scrollToMenu}
        >
          <ChevronDown className="w-8 h-8 text-cream/50 hover:text-gold transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
