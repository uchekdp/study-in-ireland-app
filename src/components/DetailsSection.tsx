import { Briefcase, CalendarCheck, FileCheck, RefreshCw, Plane, Home, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function DetailsSection() {
  const expectations = [
    {
      id: "work-permission",
      title: "Work Permission",
      description: "Earn an average wage of €14.5/hr while studying English part-time.",
      icon: Briefcase,
    },
    {
      id: "renewable-trc",
      title: "Renewable TRC",
      description: "Temporary Residence Card renewable up to 3 times for language studies.",
      icon: RefreshCw,
    },
    {
      id: "rolling-intake",
      title: "Rolling Intake",
      description: "Flexible start dates with language courses beginning frequently.",
      icon: CalendarCheck,
    },
    {
      id: "no-age-limit",
      title: "No Age Limit",
      description: "Open to adults of all ages looking to improve their English skills.",
      icon: FileCheck,
    }
  ];

  const costIncludes = [
    { name: "Tuition Fee", icon: GraduationCapIcon },
    { name: "Accommodation (1 Month)", icon: Home },
    { name: "Airport Pickup", icon: Plane },
    { name: "Visa Fee", icon: CreditCard },
  ];

  return (
    <section id="details" className="pt-24 pb-16 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expected Benefits */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Program Benefits</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-charcoal mb-4">What To Expect In Ireland</h3>
            <p className="text-brand-charcoal/70">A seamless transition to work and study in one of Europe's fastest-growing economies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/expectation/${item.id}`}
                  className="block h-full bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-brand-charcoal/5 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-emerald group-hover:text-brand-gold transition-all duration-300">
                    <item.icon className="w-7 h-7 text-brand-emerald group-hover:text-brand-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-charcoal mb-3">{item.title}</h4>
                  <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cost Includes */}
        <div className="bg-brand-emerald rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-brand-cream shadow-2xl">
          <div className="absolute top-0 right-0 -m-24 w-64 h-64 bg-brand-forest rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -m-24 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Total Package Includes</h3>
              <p className="text-brand-cream/80 mb-6">Our comprehensive 5.8 Million Naira package covers your essential relocation needs, ensuring a smooth transition to Ireland.</p>
              <div className="text-4xl font-bold text-brand-gold font-display">₦ 5.8 Million</div>
            </div>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 md:gap-6">
              {costIncludes.map((feature, i) => (
                <div key={i} className="flex items-center space-x-4 bg-brand-forest/50 p-4 rounded-2xl border border-brand-cream/10">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <span className="font-semibold text-lg">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Temporary icon to satisfy import errors
function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a2 2 0 0 0-.019-3.838L12.83 4.305a2 2 0 0 0-1.66 0L2.6 7.08a2 2 0 0 0 0 3.84l9.36 4.346a2 2 0 0 0 1.66 0l5.88-2.73" />
      <path d="M7 11v9" />
      <path d="M12 21c-3.314 0-6-1.5-6-3.342V13.5m12 0v5" />
    </svg>
  );
}
