import { useState, FormEvent } from 'react';
import { Upload, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({});
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    // Basic handler
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission to Google Drive
    setIsSubmitted(true);
    // In a real backend, this would use the Google Drive API to upload to the folder
    setTimeout(() => {
      setIsSubmitted(false);
      setPassportFile(null);
      setCertificateFile(null);
      setFormData({});
      (e.target as HTMLFormElement).reset();
    }, 8000);
  };

  const InputField = ({ label, name, type = 'text', placeholder = '' }: any) => (
    <div className="flex flex-col">
      <label className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal/60 mb-2 ml-1">{label}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full bg-brand-cream border border-brand-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all"
      />
    </div>
  );

  return (
    <section id="apply" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">Application Portal</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal">Start Your Ireland Journey</h3>
        </div>

        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-8 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-forest rounded-3xl flex flex-col items-center justify-center shadow-lg"
          >
            <CheckCircle2 className="w-16 h-16 text-brand-emerald mb-4" />
            <h4 className="text-2xl font-display font-bold text-center mb-2">Application Submitted!</h4>
            <p className="text-center mb-4 max-w-lg text-brand-forest/80">
              Your application and documents have been successfully sent to the designated Google Drive folder.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1ti7XkAkHubvLpXMeamc6hqb4J9Eg3cxK?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex py-3 px-6 bg-white border border-brand-emerald/20 rounded-full font-semibold text-brand-emerald shadow-sm hover:shadow-md transition-all"
            >
              Open Google Drive Folder
            </a>
          </motion.div>
        )}

        <form className="space-y-12 bg-white/50 border border-brand-charcoal/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" onSubmit={handleSubmit}>
          
          {/* Section 1 */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold font-display">1</span>
              <h4 className="text-2xl font-display font-bold text-brand-charcoal pb-1 border-b-2 border-brand-charcoal border-opacity-10">Personal Information</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" name="firstName" />
              <InputField label="Surname" name="surname" />
              <InputField label="Full Name (As on Passport)" name="fullName" />
              <InputField label="Date of Birth" name="dob" type="date" />
              
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal/60 mb-2 ml-1">Gender</label>
                <select className="w-full bg-brand-cream border border-brand-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <InputField label="Nationality" name="nationality" />
              <InputField label="Email Address" name="email" type="email" />
              <InputField label="Phone Number" name="phone" type="tel" />
              <InputField label="Passport Number" name="passportNum" />
              <InputField label="Date Of Issue" name="passportIssue" type="date" />
              <InputField label="Date Of Expiry" name="passportExpiry" type="date" />
              <InputField label="Issuing Country" name="issuingCountry" />
              
              <div className="md:col-span-2">
                <InputField label="Address Line 1" name="address" />
              </div>
              <InputField label="City" name="city" />
              <InputField label="County/Province" name="county" />
              <InputField label="Postal Code" name="postalCode" />
              <InputField label="Country" name="country" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="pt-8 border-t border-brand-charcoal/10">
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold font-display">2</span>
              <h4 className="text-2xl font-display font-bold text-brand-charcoal pb-1 border-b-2 border-brand-charcoal border-opacity-10">Next of Kin</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="nokName" />
              <InputField label="Relationship" name="nokRelationship" />
              <InputField label="Phone Number" name="nokPhone" type="tel" />
              <InputField label="Email Address" name="nokEmail" type="email" />
            </div>
          </div>

          {/* Document Upload */}
          <div className="pt-8 border-t border-brand-charcoal/10">
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold font-display">3</span>
              <h4 className="text-2xl font-display font-bold text-brand-charcoal pb-1 border-b-2 border-brand-charcoal border-opacity-10">Document Upload</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col items-center justify-center px-6 py-10 border-2 border-dashed border-brand-charcoal/20 rounded-2xl hover:bg-brand-cream hover:border-brand-emerald transition-all group cursor-pointer">
                {passportFile ? <FileText className="w-8 h-8 text-brand-emerald mb-3" /> : <Upload className="w-8 h-8 text-brand-emerald mb-3 group-hover:scale-110 transition-transform" />}
                <span className="font-semibold text-brand-charcoal text-center px-2 break-all line-clamp-1">{passportFile ? passportFile.name : "Upload Passport Data Page"}</span>
                <span className="text-xs text-brand-charcoal/50 mt-1">PDF only, up to 5MB</span>
                <input type="file" className="hidden" accept=".pdf,application/pdf" onChange={(e) => e.target.files && setPassportFile(e.target.files[0])} />
              </label>
              
              <label className="flex flex-col items-center justify-center px-6 py-10 border-2 border-dashed border-brand-charcoal/20 rounded-2xl hover:bg-brand-cream hover:border-brand-emerald transition-all group cursor-pointer">
                {certificateFile ? <FileText className="w-8 h-8 text-brand-emerald mb-3" /> : <Upload className="w-8 h-8 text-brand-emerald mb-3 group-hover:scale-110 transition-transform" />}
                <span className="font-semibold text-brand-charcoal text-center px-2 break-all line-clamp-1">{certificateFile ? certificateFile.name : "Upload Academic Certificate"}</span>
                <span className="text-xs text-brand-charcoal/50 mt-1">WAEC, NECO, or Degree (PDF only)</span>
                <input type="file" className="hidden" accept=".pdf,application/pdf" onChange={(e) => e.target.files && setCertificateFile(e.target.files[0])} />
              </label>
            </div>
          </div>

          <div className="pt-10 flex justify-center">
            <button type="submit" className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full text-brand-emerald bg-brand-gold hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-300 shadow-xl w-full md:w-auto">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
