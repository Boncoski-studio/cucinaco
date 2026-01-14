import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Leaf, WheatOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MENU_ITEMS, CATEGORIES, DIETARY_FILTERS, MenuItem } from '@/data/menuData';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDietary = dietaryFilter === 'all' || item.tags.includes(dietaryFilter as 'vegetarian' | 'gluten-free');
    return matchesCategory && matchesDietary;
  });

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Our Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            The Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each dish tells a story of Italian heritage, crafted with the finest seasonal ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {CATEGORIES.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`rounded-full px-6 transition-all ${
                activeCategory === category.id
                  ? 'bg-charcoal text-cream hover:bg-charcoal/90'
                  : 'border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Dietary Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {DIETARY_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setDietaryFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                dietaryFilter === filter.id
                  ? 'bg-gold/20 text-gold-dark border border-gold'
                  : 'bg-charcoal/5 text-muted-foreground hover:bg-charcoal/10 border border-transparent'
              }`}
            >
              {filter.id === 'vegetarian' && <Leaf className="w-4 h-4" />}
              {filter.id === 'gluten-free' && <WheatOff className="w-4 h-4" />}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No items match your current filters.
          </motion.p>
        )}
      </div>
    </section>
  );
};

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card
        className="group overflow-hidden bg-white border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 flex gap-2">
            {item.tags.includes('vegetarian') && (
              <span className="bg-green-600/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Leaf className="w-3 h-3" />
                V
              </span>
            )}
            {item.tags.includes('gluten-free') && (
              <span className="bg-amber-600/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <WheatOff className="w-3 h-3" />
                GF
              </span>
            )}
          </div>

          {/* Add Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold hover:bg-gold-light text-charcoal flex items-center justify-center shadow-gold transition-colors"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors">
              {item.name}
            </h3>
            <span className="text-gold font-semibold text-lg">
              ${item.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default MenuSection;
