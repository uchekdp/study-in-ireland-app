import { motion } from 'motion/react';
import { CheckCircle2, FileText, IdCard, GraduationCap, Map, BookOpen, UserCheck, Settings, Mail, CreditCard, Banknote, ShieldCheck, Plane, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequirementsAndSteps() {
  const requirements = [
    { title: "International Passport", icon: IdCard },
    { title: "WAEC / NECO or Degree Certificate", icon: GraduationCap },
    { title: "English Language Proficiency", icon: FileText },
  ];

  const steps = [
    { id: "program-selection", title: "Program Selection", icon: BookOpen },
    { id: "eligibility-check", title: "Eligibility Check", icon: UserCheck },
    { id: "admission-processing", title: "Admission Processing", icon: Settings },
    { id: "receive-admission-letter", title: "Receive Admission Letter", icon: Mail },
    { id: "tuition-payment", title: "Tuition Payment", icon: CreditCard },
    { id: "proof-of-funds", title: "Proof Of Funds Preparation", icon: Banknote },
    { id: "visa-processing", title: "Visa Processing", icon: FileText },
    { id: "visa-success", title: "Visa Success", icon: ShieldCheck },
    { id: "flight-booking", title: "Flight Booking", icon: Plane },
    { id: "arrival-settlement", title: "Arrival & Settlement Support", icon: Home },
  ];

  return (
    <>
      <section id="requirements" className="py-20 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual/Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden"
            >
              <img 
                src="https://i.ibb.co/21m3f41g/Chat-GPT-Image-May-11-2026-04-05-59-PM.png" 
                alt="Students walking on campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-emerald/20"></div>
            </motion.div>

            {/* Requirements Content */}
            <div>
              <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">What You Need</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-charcoal mb-8">Simple Requirements</h3>
              
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-start items-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-brand-charcoal/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center mr-6 shrink-0">
                      <req.icon className="w-6 h-6 text-brand-emerald" />
                    </div>
                    <span className="text-xl font-semibold text-brand-charcoal">{req.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white border-y border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Application Journey</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-charcoal mb-4">Step-by-Step Process</h3>
            <p className="text-brand-charcoal/70">From your first inquiry to your first day in Ireland, we guide you every step of the way.</p>
          </div>

          <div className="relative">
            {/* Timeline line hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-cream -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-cream p-6 rounded-3xl relative border border-white hover:border-brand-gold/30 hover:shadow-xl transition-all group hover:-translate-y-1 block"
                >
                  <Link to={`/journey/${step.id}`} className="block h-full">
                    <div className="text-6xl font-display font-black text-white absolute -top-4 -right-2 drop-shadow-md opacity-50 group-hover:text-brand-gold/20 transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-emerald flex items-center justify-center font-bold text-sm mb-4 relative z-10">
                      <step.icon className="w-5 h-5 text-brand-emerald" />
                    </div>
                    <h4 className="font-semibold text-brand-charcoal leading-tight relative z-10 pr-4">{step.title}</h4>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
