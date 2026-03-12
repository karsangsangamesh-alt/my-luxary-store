import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Watches', 'Bags', 'Jewelry', 'Accessories'];

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Boutique</h1>
          <p className="text-luxury-black/60 max-w-2xl mx-auto uppercase tracking-widest text-xs">
            Explore our curated selection of exquisite luxury goods, handcrafted with precision and passion.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-luxury-black/10 pb-8 gap-6">
          <div className="flex items-center space-x-8 overflow-x-auto w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-widest whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'text-luxury-gold font-bold border-b border-luxury-gold pb-1' 
                    : 'text-luxury-black/40 hover:text-luxury-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs uppercase tracking-widest font-medium">
                <span>Sort By: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-luxury-black text-luxury-ivory opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 p-4 rounded-lg shadow-2xl">
                {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left py-2 text-[10px] uppercase tracking-widest hover:text-luxury-gold transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-luxury-black/40 uppercase tracking-widest">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
