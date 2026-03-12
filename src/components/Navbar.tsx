import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-luxury-ivory"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors text-sm uppercase tracking-widest">Shop</Link>
          <Link to="/collections" className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors text-sm uppercase tracking-widest">Collections</Link>
          <Link to="/story" className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors text-sm uppercase tracking-widest">Our Story</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-luxury-ivory">AURELIA</h1>
        </Link>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors hidden sm:block">
            <Heart size={20} />
          </button>
          <Link to="/cart" className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
              <Link to="/" className="text-3xl font-serif text-luxury-ivory">Home</Link>
              <Link to="/shop" className="text-3xl font-serif text-luxury-ivory">Shop</Link>
              <Link to="/collections" className="text-3xl font-serif text-luxury-ivory">Collections</Link>
              <Link to="/story" className="text-3xl font-serif text-luxury-ivory">Our Story</Link>
              <Link to="/contact" className="text-3xl font-serif text-luxury-ivory">Contact</Link>
            </div>
            <div className="mt-auto pt-8 border-t border-luxury-ivory/10">
              <p className="text-luxury-ivory/40 text-sm uppercase tracking-widest">Follow Us</p>
              <div className="flex space-x-6 mt-4">
                <span className="text-luxury-ivory/60">Instagram</span>
                <span className="text-luxury-ivory/60">Facebook</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
