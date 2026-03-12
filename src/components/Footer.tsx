import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-ivory pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif tracking-widest mb-6">AURELIA</h2>
          <p className="text-luxury-ivory/60 leading-relaxed mb-6">
            Crafting moments of pure elegance through meticulously designed luxury goods. Our commitment to excellence is reflected in every detail.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="text-luxury-ivory/60 hover:text-luxury-gold cursor-pointer transition-colors" />
            <Facebook size={20} className="text-luxury-ivory/60 hover:text-luxury-gold cursor-pointer transition-colors" />
            <Twitter size={20} className="text-luxury-ivory/60 hover:text-luxury-gold cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] font-medium mb-8">Boutique</h3>
          <ul className="space-y-4 text-luxury-ivory/60">
            <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">All Products</Link></li>
            <li><Link to="/shop?cat=Watches" className="hover:text-luxury-gold transition-colors">Watches</Link></li>
            <li><Link to="/shop?cat=Bags" className="hover:text-luxury-gold transition-colors">Bags</Link></li>
            <li><Link to="/shop?cat=Jewelry" className="hover:text-luxury-gold transition-colors">Jewelry</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] font-medium mb-8">Client Service</h3>
          <ul className="space-y-4 text-luxury-ivory/60">
            <li><Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-luxury-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-luxury-gold transition-colors">FAQ</Link></li>
            <li><Link to="/care" className="hover:text-luxury-gold transition-colors">Product Care</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] font-medium mb-8">Newsletter</h3>
          <p className="text-luxury-ivory/60 mb-6">Subscribe to receive updates on new collections and exclusive events.</p>
          <div className="flex border-b border-luxury-ivory/20 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-luxury-ivory/30"
            />
            <button className="text-luxury-gold uppercase text-xs tracking-widest font-bold">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-luxury-ivory/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-luxury-ivory/40">
        <p>© 2026 AURELIA LUXURY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};
