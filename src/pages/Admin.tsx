import { useState, useEffect, FormEvent } from 'react';
import { Lock, LogOut, Users, FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'IRELAND2026') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-brand-cream/50 px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-brand-charcoal/5"
        >
          <div className="w-16 h-16 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mb-6 mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-center text-brand-charcoal mb-2 font-display">Admin Portal</h2>
          <p className="text-center text-brand-charcoal/60 mb-8">Enter your credentials to access the dashboard</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/10 focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all"
                placeholder="Enter admin password"
              />
              {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-brand-emerald text-white py-3 rounded-xl font-medium hover:bg-brand-forest transition-colors shadow-lg shadow-brand-emerald/20"
            >
              Log In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Mock data for dashboard
  const stats = [
    { label: 'Total Applications', value: '142', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Pending Review', value: '38', icon: Users, color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
    { label: 'Approved', value: '89', icon: FileText, color: 'text-brand-emerald', bg: 'bg-brand-emerald/10' },
  ];

  const recentApplications = [
    { id: '1', name: 'Chidera Nwosu', date: 'May 11, 2026', status: 'Pending', program: '8 Months Study & Work' },
    { id: '2', name: 'Oluwaseun Adedayo', date: 'May 10, 2026', status: 'Approved', program: '8 Months Study & Work' },
    { id: '3', name: 'Binta Suleiman', date: 'May 09, 2026', status: 'Under Review', program: '8 Months Study & Work' },
    { id: '4', name: 'Adekunle Gold', date: 'May 08, 2026', status: 'Approved', program: '8 Months Study & Work' },
  ];

  return (
    <div className="min-h-screen bg-brand-cream/30 pb-12 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-brand-charcoal">Admin Dashboard</h1>
            <p className="text-brand-charcoal/60 mt-1">Manage applications and track progress</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-brand-charcoal/10 rounded-lg text-brand-charcoal/70 hover:bg-brand-cream/50 transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors shadow-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-brand-charcoal/5 shadow-sm transform transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-brand-charcoal/60 font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-brand-charcoal font-display">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications Table */}
        <div className="bg-white rounded-3xl border border-brand-charcoal/5 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-brand-charcoal/5 flex justify-between items-center">
            <h2 className="text-xl font-bold text-brand-charcoal font-display">Recent Applications</h2>
            <button className="text-brand-emerald text-sm font-semibold hover:text-brand-forest transition-colors">View All Applications</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-brand-cream/30 text-left text-xs uppercase tracking-wider text-brand-charcoal/60 font-semibold">
                <tr>
                  <th className="px-6 md:px-8 py-4">Applicant Name</th>
                  <th className="px-6 md:px-8 py-4">Date Applied</th>
                  <th className="px-6 md:px-8 py-4">Program</th>
                  <th className="px-6 md:px-8 py-4">Status</th>
                  <th className="px-6 md:px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-charcoal/5">
                {recentApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-brand-cream/10 transition-colors group">
                    <td className="px-6 md:px-8 py-5 font-semibold text-brand-charcoal">{app.name}</td>
                    <td className="px-6 md:px-8 py-5 text-brand-charcoal/70">{app.date}</td>
                    <td className="px-6 md:px-8 py-5 text-brand-charcoal/70">{app.program}</td>
                    <td className="px-6 md:px-8 py-5">
                      <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full inline-flex items-center space-x-1 ${
                        app.status === 'Approved' ? 'bg-[#169B62]/10 text-[#169B62]' :
                        app.status === 'Pending' ? 'bg-[#FF883E]/10 text-[#FF883E]' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          app.status === 'Approved' ? 'bg-[#169B62]' :
                          app.status === 'Pending' ? 'bg-[#FF883E]' :
                          'bg-blue-600'
                        }`}></span>
                        <span>{app.status}</span>
                      </span>
                    </td>
                    <td className="px-6 md:px-8 py-5 text-right">
                      <button className="text-brand-emerald hover:text-brand-forest font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">Review Application</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
