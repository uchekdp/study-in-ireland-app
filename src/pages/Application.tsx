import RequirementsAndSteps from '../components/RequirementsAndSteps';
import ApplicationForm from '../components/ApplicationForm';

export default function Application() {
  return (
    <>
      <div className="pt-24 bg-brand-emerald text-center pb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Application Center</h1>
        <p className="text-brand-cream/80 text-lg max-w-2xl mx-auto px-4">
          Everything you need to know about applying for the Study & Work program in Ireland.
        </p>
      </div>
      <RequirementsAndSteps />
      <ApplicationForm />
    </>
  );
}
