import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need IELTS to apply?",
      answer: "No, IELTS is not required for this specific Study & Work program, making your application process smoother and faster."
    },
    {
      question: "Can I work while studying?",
      answer: "Yes, the program grants you work permissions allowing you to earn an average wage of €14.5/hr."
    },
    {
      question: "How long does visa processing take?",
      answer: "Processing time typically ranges between 30 to 60 days from the moment your full application is submitted."
    },
    {
      question: "What is Proof of Funds?",
      answer: "Proof of Funds is a mandatory financial statement demonstrating you have sufficient money to support your living expenses while in Ireland without relying on public funds."
    },
    {
      question: "Is there an age limit for applicants?",
      answer: "No, there is no age limit for this program. It is open to dedicated individuals looking to advance their education and career."
    },
    {
      question: "What is Source of Fund?",
      answer: "Source of Fund is the documented origin of the money you are using for your proof of funds. This could be salary, business profits, savings, or sponsorship. It proves to the embassy that the funds are legitimately acquired."
    },
    {
      question: "What are ties to home countries?",
      answer: "Ties to your home country are evidence that you intend to return after your studies. This can include family connections, property ownership, business investments, or a secure job awaiting your return."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-brand-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Have Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden border transition-colors ${openIndex === index ? 'border-brand-emerald shadow-lg' : 'border-brand-charcoal/5 shadow-sm'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-brand-charcoal pr-8">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-emerald text-brand-gold' : 'bg-brand-cream text-brand-charcoal'}`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-brand-charcoal/70 leading-relaxed border-t border-brand-charcoal/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
