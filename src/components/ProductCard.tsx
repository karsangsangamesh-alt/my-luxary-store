import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-luxury-charcoal mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <button 
            onClick={() => addToCart(product)}
            className="w-12 h-12 bg-luxury-ivory text-luxury-black rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-ivory transition-colors"
          >
            <ShoppingBag size={20} />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-luxury-ivory text-luxury-black rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-ivory transition-colors"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/40 mb-1">{product.category}</p>
        <h3 className="text-lg font-serif mb-2 group-hover:text-luxury-gold transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-medium text-luxury-charcoal">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};
