import { motion } from 'motion/react';
import { ArrowRight, Clock, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-brand-cream pt-20 overflow-hidden">
      {/* Subtle Light Background with Ireland Flag Color Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Main Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide uppercase">8 Months General English Program</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-brand-charcoal leading-[1.1] mb-6"
            >
              Study & Work <br className="hidden sm:block" />
              <span className="text-brand-emerald">In Ireland</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-brand-charcoal/70 mb-8 font-light"
            >
              Exclusive 8-Month English Language Program tailored for <span className="font-semibold text-brand-gold">Nigerians</span>. Explore Ireland with Creativeswiftng.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                to="/application"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-brand-emerald hover:bg-brand-forest transition-all duration-300 shadow-lg shadow-brand-emerald/20"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/2349039733298"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-brand-charcoal border border-brand-charcoal/20 hover:bg-brand-charcoal/5 transition-all duration-300"
              >
                Speak With An Advisor
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-brand-charcoal/10 pt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-brand-charcoal/60">Processing Time</p>
                  <p className="font-semibold text-brand-charcoal">30–60 Days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                  <span className="font-bold">₦</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-brand-charcoal/60">Total Package</p>
                  <p className="font-semibold text-brand-charcoal">5.8 Million Naira</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-emerald/10 border border-brand-charcoal/5">
              <img
                src="https://i.ibb.co/99pnNb3n/Chat-GPT-Image-May-11-2026-03-49-40-PM.png"
                alt="Nigerian Girl traveling to Ireland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Element 1 - Using Flag Colors */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center space-x-4 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-emerald" />
                </div>
                <div>
                  <p className="text-brand-charcoal font-bold">Dublin, Ireland</p>
                  <p className="text-brand-charcoal/60 text-sm">Top Tech Hub in Europe</p>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute top-8 -right-6 bg-brand-gold text-white px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-xl transform rotate-3">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-white/80 text-xs uppercase tracking-wide">Admission Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
