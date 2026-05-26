import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Oluwaseun T.",
      role: "Student Visa Approved",
      text: "Creativeswiftng made the impossible happen! I got my admission in weeks, and the visa process was incredibly smooth. Now I'm working part-time in Dublin while studying.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Chidera E.",
      role: "Arrival & Settlement",
      text: "The airport pickup and accommodation support was a lifesaver. I didn't know anyone in Ireland, but they treated me like family from the moment I landed.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Musa I.",
      role: "Working in IT",
      text: "With no IELTS required, I saved so much time. I'm now halfway through my 8-month program and secured a great part-time job paying €15/hr thanks to their guidance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1525875975471-999f6cb74d28?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -mx-20 -my-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal">Hear From Our Students</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-cream border border-brand-charcoal/5 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-emerald/10" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-brand-charcoal/80 mb-8 leading-relaxed font-medium">"{testi.text}"</p>
              
              <div className="flex items-center space-x-4 border-t border-brand-charcoal/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal font-display">{testi.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-emerald mt-0.5">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
