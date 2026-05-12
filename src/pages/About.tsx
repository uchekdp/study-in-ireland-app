import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

export default function About() {
  return (
    <>
      <div className="pt-24 bg-brand-emerald text-center pb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About the Program</h1>
        <p className="text-brand-cream/80 text-lg max-w-2xl mx-auto px-4">
          Learn why Creativeswiftng is your best partner to start a new life in Ireland.
        </p>
      </div>
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
