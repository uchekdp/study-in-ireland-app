import { motion } from 'motion/react';
import { Star, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const features = [
    "No IELTS Required",
    "Airport Pickup",
    "Accommodation Support",
    "Visa Guidance",
    "Student Support",
    "Affordable Tuition",
    "Work While Studying",
    "Fast Processing"
  ];

  return (
    <section className="py-24 bg-brand-emerald relative overflow-hidden text-brand-cream">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-forest/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Why Creativeswiftng?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 mt-2">Unmatched Support<br/>For Your Success</h3>
            <p className="text-brand-cream/80 text-lg mb-8 leading-relaxed">
              We remove the friction from international relocation. From securing your admission without IELTS to making sure you have a place to stay when you land, our comprehensive services guarantee peace of mind.
            </p>
            <div className="flex space-x-4">
              <Link to="/application" className="inline-block px-8 py-4 rounded-full bg-brand-gold text-brand-emerald font-semibold shadow-[0_0_20px_rgba(215,195,138,0.2)] hover:bg-brand-cream transition-colors">
                Begin Application
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-dark p-6 rounded-2xl flex items-center space-x-4 hover:bg-brand-forest/60 transition-colors cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="font-medium text-lg tracking-wide">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
