import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 text-center min-h-screen bg-luxury-ivory">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-luxury-black/10 mb-8" />
          <h1 className="text-4xl font-serif mb-6">Your Bag is Empty</h1>
          <p className="text-luxury-black/60 mb-10 uppercase tracking-widest text-xs">
            It seems you haven't added any exquisite pieces to your collection yet.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-luxury-black text-luxury-ivory px-10 py-5 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-luxury-gold transition-all duration-500"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif mb-16">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatePresence mode="popLayout">
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex flex-col sm:flex-row gap-8 pb-10 border-b border-luxury-black/10"
                >
                  <div className="w-full sm:w-40 aspect-[3/4] overflow-hidden rounded-xl bg-luxury-charcoal">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-luxury-gold uppercase tracking-widest text-[10px] mb-1">{item.category}</p>
                        <h3 className="text-xl font-serif">{item.name}</h3>
                      </div>
                      <p className="text-lg font-medium">${item.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-luxury-black/10 rounded-full px-4 py-2 space-x-6">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-luxury-black/40 hover:text-luxury-black transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-luxury-black/40 hover:text-luxury-black transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-luxury-black/40 hover:text-red-500 transition-colors flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
                      >
                        <Trash2 size={14} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-luxury-black text-luxury-ivory p-10 rounded-3xl sticky top-32">
              <h2 className="text-2xl font-serif mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-ivory/60">Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-ivory/60">Shipping</span>
                  <span className="text-luxury-gold uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-ivory/60">Estimated Tax</span>
                  <span>${(cartTotal * 0.08).toLocaleString()}</span>
                </div>
                <div className="pt-6 border-t border-luxury-ivory/10 flex justify-between items-end">
                  <span className="text-lg font-serif">Total</span>
                  <span className="text-2xl font-medium text-luxury-gold">${(cartTotal * 1.08).toLocaleString()}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-5 bg-luxury-ivory text-luxury-black rounded-full uppercase text-xs tracking-widest font-bold hover:bg-luxury-gold hover:text-luxury-ivory transition-all duration-500 flex items-center justify-center space-x-3 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <p className="text-[10px] text-luxury-ivory/40 text-center mt-6 uppercase tracking-widest">
                Secure checkout powered by AURELIA Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
