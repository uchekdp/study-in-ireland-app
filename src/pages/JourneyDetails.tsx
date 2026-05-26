import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, UserCheck, Settings, Mail, CreditCard, Banknote, FileText, ShieldCheck, Plane, Home } from 'lucide-react';
import { motion } from 'motion/react';

const journeyData: Record<string, any> = {
  'program-selection': {
    title: 'Program Selection',
    icon: BookOpen,
    description: 'Select the best program that fits your career goals in Ireland.',
    details: 'The first step is selecting a program that aligns with your educational background, career goals, and budget. Our advisors work closely with you to identify universities and colleges in Ireland that offer the best courses for your desired field. We guide you through the pros and cons of different programs, helping you make an informed decision for your future.'
  },
  'eligibility-check': {
    title: 'Eligibility Check',
    icon: UserCheck,
    description: 'Ensure you meet all requirements for your chosen program.',
    details: 'Before proceeding with the application, we conduct a thorough evaluation of your academic credentials, English proficiency scores, and work experience. This comprehensive eligibility check ensures you meet all admission criteria set by your chosen institution, maximizing your chances of a successful application.'
  },
  'admission-processing': {
    title: 'Admission Processing',
    icon: Settings,
    description: 'We process your application with the partner institution.',
    details: 'Our dedicated team will handle the preparation and submission of your application to the chosen university or college. We ensure all required documents, including your passport, academic transcripts, statement of purpose, and reference letters, are perfectly compiled and submitted well before deadlines to prioritize your admission.'
  },
  'receive-admission-letter': {
    title: 'Receive Admission Letter',
    icon: Mail,
    description: 'Get your official offer letter from the institution.',
    details: 'Once your application is reviewed and approved, you will receive an official conditional or unconditional offer letter from your chosen Irish university or college. This letter serves as your formal acceptance into the program and details your tuition fees, course start date, and next steps.'
  },
  'tuition-payment': {
    title: 'Tuition Payment',
    icon: CreditCard,
    description: 'Secure your spot by paying the required tuition fees.',
    details: 'To secure your seat and fulfill the visa requirements, you must pay your tuition fees as stipulated in your offer letter. We guide you on the safest and most efficient payment methods (such as bank transfers or educational payment systems) to ensure your funds reach the institution securely and quickly.'
  },
  'proof-of-funds': {
    title: 'Proof Of Funds Preparation',
    icon: Banknote,
    description: 'Prepare financial documents for your visa application.',
    details: 'Applying for an Irish student visa requires demonstrating sufficient funds to cover your tuition and living expenses. We will assist you in gathering and organizing your bank statements, sponsorship letters, and any required financial affidavits to meet the stringent criteria set by the Irish Naturalisation and Immigration Service (INIS).'
  },
  'visa-processing': {
    title: 'Visa Processing',
    icon: FileText,
    description: 'Submit and process your Ireland student visa.',
    details: 'We guide you step-by-step through the demanding student visa application process. This covers filling out the AVATS online application form, booking VFS appointments, compiling your entire visa dossier, and preparing you for any potential embassy interviews to ensure everything is perfect.'
  },
  'visa-success': {
    title: 'Visa Success',
    icon: ShieldCheck,
    description: 'Celebrate your visa approval and get ready.',
    details: 'Upon successful processing, you will receive your passport with your Irish study visa stamped. We celebrate this major milestone with you but also immediately transition to pre-departure briefings to prepare you for what to expect when you arrive in the Republic of Ireland.'
  },
  'flight-booking': {
    title: 'Flight Booking',
    icon: Plane,
    description: 'Book your flight to Ireland.',
    details: 'With your visa secured, the next step is booking your flight. We can connect you with partnered travel agencies offering student discounts or guide you on the best routes and airlines to take. We ensure you book flights that align perfectly with your accommodation check-in times and program start dates.'
  },
  'arrival-settlement': {
    title: 'Arrival & Settlement Support',
    icon: Home,
    description: 'Arrive in Ireland with our dedicated support to settle in.',
    details: 'Your journey doesn’t end with a flight. Upon arrival in Ireland, our support network kicks in. We assist with airport pickups, initial accommodation setups, registering with the local immigration office (GNIB/IRP), opening a local bank account, getting a Leap Card for transport, and securing your PPS number so you can legally start working.'
  }
};

export default function JourneyDetails() {
  const { id } = useParams<{ id: string }>();
  const data = id ? journeyData[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-brand-cream/30 px-4">
        <h1 className="text-3xl font-bold mb-4 font-display text-brand-charcoal">Step Not Found</h1>
        <Link to="/" className="text-brand-emerald hover:text-brand-forest font-semibold flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen pt-28 pb-16 bg-brand-cream/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-brand-charcoal/60 hover:text-brand-emerald transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-charcoal/5"
        >
          <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8 text-brand-gold">
            <Icon className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal mb-6">
            {data.title}
          </h1>
          
          <p className="text-xl text-brand-emerald font-medium mb-8 pb-8 border-b border-brand-charcoal/10">
            {data.description}
          </p>
          
          <div className="prose prose-lg text-brand-charcoal/80 leading-relaxed font-light">
            <p>{data.details}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
