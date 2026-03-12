import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="pt-48 pb-24 px-6 text-center min-h-screen bg-luxury-ivory">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto"
        >
          <CheckCircle size={80} className="mx-auto text-luxury-gold mb-8" />
          <h1 className="text-5xl font-serif mb-6">Thank You</h1>
          <p className="text-luxury-black/60 mb-10 uppercase tracking-widest text-xs leading-relaxed">
            Your order has been placed successfully. A confirmation email has been sent to your inbox.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-luxury-black text-luxury-ivory px-10 py-5 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-luxury-gold transition-all duration-500"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Link to="/cart" className="text-luxury-black/40 hover:text-luxury-black transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl font-serif">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <form onSubmit={handlePlaceOrder} className="space-y-12">
            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 flex items-center space-x-3">
                <Truck size={18} className="text-luxury-gold" />
                <span>Shipping Information</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-luxury-black/40 mb-2">First Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-luxury-black/20 py-3 outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-luxury-black/40 mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-luxury-black/20 py-3 outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-luxury-black/40 mb-2">Address</label>
                  <input required type="text" className="w-full bg-transparent border-b border-luxury-black/20 py-3 outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-luxury-black/40 mb-2">City</label>
                  <input required type="text" className="w-full bg-transparent border-b border-luxury-black/20 py-3 outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-luxury-black/40 mb-2">Postal Code</label>
                  <input required type="text" className="w-full bg-transparent border-b border-luxury-black/20 py-3 outline-none focus:border-luxury-gold transition-colors" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 flex items-center space-x-3">
                <CreditCard size={18} className="text-luxury-gold" />
                <span>Payment Method</span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-luxury-gold rounded-2xl bg-luxury-gold/5 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-6 bg-luxury-black rounded flex items-center justify-center text-[8px] text-luxury-ivory font-bold">VISA</div>
                    <span className="text-sm font-medium">Ending in 4242</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-luxury-gold" />
                </div>
                <button type="button" className="w-full py-4 border border-dashed border-luxury-black/20 rounded-2xl text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 hover:text-luxury-black hover:border-luxury-black transition-all">
                  + Add New Payment Method
                </button>
              </div>
            </section>

            <button 
              type="submit"
              className="w-full py-6 bg-luxury-black text-luxury-ivory rounded-full uppercase text-xs tracking-widest font-bold hover:bg-luxury-gold transition-all duration-500 shadow-2xl"
            >
              Complete Purchase — ${(cartTotal * 1.08).toLocaleString()}
            </button>
            
            <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-luxury-black/40">
              <ShieldCheck size={14} />
              <span>Encrypted & Secure Transaction</span>
            </div>
          </form>

          {/* Order Summary */}
          <div className="hidden lg:block">
            <div className="bg-luxury-charcoal text-luxury-ivory p-12 rounded-3xl sticky top-32">
              <h2 className="text-2xl font-serif mb-10">Your Selection</h2>
              <div className="space-y-8 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex space-x-6">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-luxury-black flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-serif">{item.name}</h4>
                      <p className="text-[10px] text-luxury-ivory/40 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                      <p className="text-sm text-luxury-gold mt-2">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-8 border-t border-luxury-ivory/10">
                <div className="flex justify-between text-xs text-luxury-ivory/60">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-luxury-ivory/60">
                  <span>Shipping</span>
                  <span className="text-luxury-gold">Complimentary</span>
                </div>
                <div className="flex justify-between text-xs text-luxury-ivory/60">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.08).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-serif pt-4">
                  <span>Total</span>
                  <span className="text-luxury-gold">${(cartTotal * 1.08).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
