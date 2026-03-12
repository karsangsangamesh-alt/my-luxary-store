export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  details: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'The Heritage Chronograph',
    category: 'Watches',
    price: 12500,
    description: 'A timeless masterpiece crafted with 18k rose gold and a hand-stitched alligator leather strap. Features our signature mechanical movement with a 72-hour power reserve.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      '18k Rose Gold Case',
      'Sapphire Crystal Back',
      'Water resistant to 50m',
      'Swiss Made'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Midnight Velvet Clutch',
    category: 'Bags',
    price: 3200,
    description: 'Exquisite Italian velvet paired with a solid gold-plated chain. The perfect companion for gala evenings and high-profile events.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      'Premium Italian Velvet',
      '24k Gold Plated Hardware',
      'Silk Lining',
      'Handcrafted in Milan'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Celestial Diamond Ring',
    category: 'Jewelry',
    price: 8900,
    description: 'A stunning 2-carat ethically sourced diamond set in a delicate platinum band, inspired by the brilliance of the night sky.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      '2.0 Carat Diamond',
      'VVS1 Clarity',
      'Platinum 950',
      'GIA Certified'
    ],
    featured: true
  },
  {
    id: '4',
    name: 'Elysian Silk Scarf',
    category: 'Accessories',
    price: 450,
    description: 'Hand-painted silk featuring motifs from classical mythology. A versatile piece that adds a touch of sophistication to any ensemble.',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      '100% Mulberry Silk',
      'Hand-rolled edges',
      '90cm x 90cm',
      'Made in France'
    ]
  },
  {
    id: '5',
    name: 'Onyx Executive Briefcase',
    category: 'Bags',
    price: 4800,
    description: 'Full-grain calfskin leather with a matte onyx finish. Designed for the modern visionary who demands both style and functionality.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      'Full-grain Calfskin',
      'Padded Laptop Compartment',
      'Polished Silver Hardware',
      'Ergonomic Handle'
    ]
  },
  {
    id: '6',
    name: 'Lumière Gold Pendant',
    category: 'Jewelry',
    price: 2100,
    description: 'A minimalist 18k yellow gold pendant that captures and reflects light with every movement. Elegance in its purest form.',
    images: [
      'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    details: [
      '18k Yellow Gold',
      'Adjustable Chain',
      'Polished Finish',
      'Signature Hallmark'
    ]
  }
];
