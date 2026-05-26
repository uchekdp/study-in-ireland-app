import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-cream pt-24 pb-12 overflow-hidden border-t-4 border-brand-gold relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-brand-emerald/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                Creativeswift<span className="text-brand-gold">ng</span>
              </span>
            </Link>
            <p className="text-brand-cream/60 leading-relaxed mb-6 font-light">
              Your trusted partner for international relocation, educational consulting, and seamless transition to Ireland.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/5 hover:bg-brand-gold flex items-center justify-center transition-colors text-brand-cream hover:text-brand-charcoal">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/5 hover:bg-brand-gold flex items-center justify-center transition-colors text-brand-cream hover:text-brand-charcoal">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/5 hover:bg-brand-gold flex items-center justify-center transition-colors text-brand-cream hover:text-brand-charcoal">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-brand-cream/70">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Program Details</Link></li>
              <li><Link to="/application" className="hover:text-brand-gold transition-colors">Requirements & Apply</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About & FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Get In Touch</h4>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 text-brand-cream/70">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="hover:text-white transition-colors"><a href="tel:09039733298">09039733298</a></p>
                  <p className="hover:text-white transition-colors"><a href="tel:08115578054">08115578054</a></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-brand-cream/70">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="hover:text-white transition-colors"><a href="mailto:creativeswiftng@gmail.com">creativeswiftng@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-brand-cream/70 sm:col-span-2 mt-2 bg-brand-cream/5 p-4 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p>Nigeria Office: <br/> 33 Okota Road, Okota-Isolo, Lagos</p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/50">
          <p>&copy; {new Date().getFullYear()} Creativeswiftng. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
