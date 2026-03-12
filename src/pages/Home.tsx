import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-gold uppercase tracking-[0.4em] text-sm mb-6"
          >
            Excellence in Every Detail
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif text-luxury-ivory mb-10 leading-tight"
          >
            Defining Modern <br /> <span className="italic">Sophistication</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-4 bg-luxury-ivory text-luxury-black px-10 py-5 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-luxury-gold hover:text-luxury-ivory transition-all duration-500 group"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 md:px-12 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-luxury-gold uppercase tracking-widest text-xs mb-4">Curated Selection</p>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Pieces</h2>
            </div>
            <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-luxury-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all mt-6 md:mt-0">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-luxury-charcoal text-luxury-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-luxury-gold/30 rounded-2xl hidden md:block" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-luxury-gold uppercase tracking-widest text-xs mb-6">Our Heritage</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">The Art of <br /> Timeless Design</h2>
            <p className="text-luxury-ivory/60 text-lg leading-relaxed mb-10">
              Since our inception, AURELIA has been synonymous with unparalleled quality and aesthetic perfection. We believe that true luxury is not just about the object itself, but the story it tells and the emotions it evokes.
            </p>
            <Link to="/story" className="inline-block bg-transparent border border-luxury-ivory/20 px-8 py-4 rounded-full uppercase text-xs tracking-widest hover:bg-luxury-ivory hover:text-luxury-black transition-all duration-500">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-luxury-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-luxury-gold text-4xl mb-8 font-serif">"</p>
          <h3 className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10">
            "AURELIA represents the pinnacle of modern luxury. Their attention to detail and commitment to craftsmanship is evident in every piece I own. Truly a brand for the discerning individual."
          </h3>
          <p className="uppercase tracking-[0.3em] text-xs font-bold">Eleanor Vance</p>
          <p className="text-luxury-black/40 text-[10px] uppercase tracking-widest mt-2">Collector & Visionary</p>
        </div>
      </section>
    </div>
  );
};
