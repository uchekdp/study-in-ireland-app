import { useParams, Link } from 'react-router-dom';
import { Briefcase, CalendarCheck, FileCheck, RefreshCw, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const expectationData: Record<string, any> = {
  'work-permission': {
    title: 'Work Permission',
    icon: Briefcase,
    description: 'Earn an average wage of €14.5/hr while studying English part-time.',
    details: 'International students enrolled in an eligible English language course (minimum of 25 weeks) listed on the ILEP are permitted to take up casual employment. This means you can work up to 20 hours a week during your course term and up to 40 hours a week during the designated holiday periods (June, July, August, and September, as well as from 15 December to 15 January). This is an excellent opportunity to practice your English in real-world settings while earning to support your living expenses.'
  },
  'renewable-trc': {
    title: 'Renewable TRC',
    icon: RefreshCw,
    description: 'Temporary Residence Card renewable up to 3 times for language studies.',
    details: 'Upon successful registration with the immigration authorities, you will be issued an Irish Residence Permit (IRP) Stamp 2. Specifically for English language students, your visa is typically granted for 8 months. You are allowed to renew this immigration permission up to three times to study a full-time English language course. This gives you a total of two years to perfect your English skills in Ireland.'
  },
  'rolling-intake': {
    title: 'Rolling Intake',
    icon: CalendarCheck,
    description: 'Flexible start dates with language courses beginning frequently.',
    details: 'Unlike traditional academic degrees that strictly limit intakes to September or January, English language schools in Ireland offer a Rolling Intake system. This means applications are accepted year-round, and new classes often commence every Monday or at the beginning of each month. This flexible admission process allows you to plan your relocation and start your language journey at a time that works best for you.'
  },
  'no-age-limit': {
    title: 'No Age Limit',
    icon: FileCheck,
    description: 'Open to adults of all ages looking to improve their English skills.',
    details: 'Whether you are a recent high school graduate setting up for higher education, or a mid-career professional looking to enhance your English for career advancement, language learning is not restricted by age. Ireland’s language schools welcome a highly diverse international community, ensuring a comprehensive, inclusive, and enriching experience for everyone dedicated to improving their English proficiency.'
  }
};

export default function ExpectationDetails() {
  const { id } = useParams<{ id: string }>();
  const data = id ? expectationData[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-brand-cream/30 px-4">
        <h1 className="text-3xl font-bold mb-4 font-display text-brand-charcoal">Page Not Found</h1>
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
          <div className="w-20 h-20 rounded-2xl bg-brand-emerald/10 flex items-center justify-center mb-8 text-brand-emerald">
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
