import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, ArrowLeft, ChevronRight, Check } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(0);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-4 mb-12 text-[10px] uppercase tracking-widest text-luxury-black/40">
          <Link to="/" className="hover:text-luxury-black transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-luxury-black transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-luxury-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] overflow-hidden bg-luxury-charcoal rounded-2xl"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-luxury-gold scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs mb-4">{product.category}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">{product.name}</h1>
            <p className="text-2xl font-medium mb-10">${product.price.toLocaleString()}</p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Description</h3>
                <p className="text-luxury-black/60 leading-relaxed">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Details</h3>
                <ul className="grid grid-cols-2 gap-y-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-luxury-black/60">
                      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={handleAddToCart}
                className={`flex-grow py-5 rounded-full uppercase text-xs tracking-widest font-bold transition-all duration-500 flex items-center justify-center space-x-3 ${
                  isAdded 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-luxury-black text-luxury-ivory hover:bg-luxury-gold'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={18} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>
              <button className="p-5 border border-luxury-black/10 rounded-full hover:bg-luxury-black hover:text-luxury-ivory transition-all duration-500">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {relatedProducts.map(p => (
                <div key={p.id} className="group">
                  <Link to={`/product/${p.id}`}>
                    <div className="aspect-[3/4] overflow-hidden bg-luxury-charcoal mb-4 rounded-xl">
                      <img 
                        src={p.images[0]} 
                        alt={p.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-serif text-lg group-hover:text-luxury-gold transition-colors">{p.name}</h3>
                    <p className="text-sm text-luxury-black/40">${p.price.toLocaleString()}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
