export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  image: string;
  tags: ('vegetarian' | 'gluten-free')[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Burrata Caprese',
    description: 'Creamy burrata with heirloom tomatoes, fresh basil, aged balsamic reduction',
    price: 18,
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80',
    tags: ['vegetarian', 'gluten-free'],
  },
  {
    id: '2',
    name: 'Carpaccio di Manzo',
    description: 'Thinly sliced beef tenderloin, arugula, capers, shaved Parmigiano',
    price: 22,
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1626200926434-a3d3c7c1ad38?w=600&q=80',
    tags: ['gluten-free'],
  },
  {
    id: '3',
    name: 'Tagliatelle al Tartufo',
    description: 'Fresh egg pasta with black truffle, butter, and Pecorino Romano',
    price: 34,
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600&q=80',
    tags: ['vegetarian'],
  },
  {
    id: '4',
    name: 'Risotto ai Funghi Porcini',
    description: 'Carnaroli rice, wild porcini mushrooms, white wine, mascarpone',
    price: 28,
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80',
    tags: ['vegetarian', 'gluten-free'],
  },
  {
    id: '5',
    name: 'Branzino alla Griglia',
    description: 'Mediterranean sea bass, lemon herb butter, roasted vegetables',
    price: 42,
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    tags: ['gluten-free'],
  },
  {
    id: '6',
    name: 'Ossobuco alla Milanese',
    description: 'Braised veal shank, saffron risotto, gremolata',
    price: 48,
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    tags: ['gluten-free'],
  },
  {
    id: '7',
    name: 'Tiramisù Classico',
    description: 'Espresso-soaked savoiardi, mascarpone cream, cocoa dust',
    price: 14,
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    tags: [],
  },
  {
    id: '8',
    name: 'Panna Cotta',
    description: 'Vanilla bean cream, wild berry compote, mint',
    price: 12,
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    tags: ['vegetarian', 'gluten-free'],
  },
  {
    id: '9',
    name: 'Melanzane alla Parmigiana',
    description: 'Layered eggplant, San Marzano tomato, mozzarella, basil',
    price: 24,
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80',
    tags: ['vegetarian', 'gluten-free'],
  },
  {
    id: '10',
    name: 'Gnocchi al Pesto',
    description: 'Potato gnocchi, Genovese basil pesto, pine nuts, Pecorino',
    price: 26,
    category: 'primi',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80',
    tags: ['vegetarian'],
  },
];

export const TIME_SLOTS = [
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'dolci', label: 'Dolci' },
] as const;

export const DIETARY_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'gluten-free', label: 'Gluten-Free' },
] as const;
