import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState<'company' | 'personal'>('company');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/app');
  };

  return (
    <div className="flex min-h-screen w-full">
        {/* Left Side - Branding/Image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-surface-light items-center justify-center overflow-hidden border-r border-border-light">
            <div className="absolute inset-0 z-0">
                <img alt="Abstract digital blue waves visualizing AI data flow" className="w-full h-full object-cover opacity-80 mix-blend-overlay grayscale-[30%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM7OgPAm4dUVLkYvUwdnNIOVZBb0svQY2YIU6BJpt2JSWdN8iCvQrNDQgVAHqZUXLxS1xiwR0rCOKW1kU7sCeYgqWxIpz-oVcPyYOYSf9rTrOrORmCf4QQCR7R623WOkghe8g75KHB4PJeNxlimHDlLiJG0gMeelU_tnGm4i1mlXGih4wjq7nq5GHIs60eUa4bfA-6OAW4PmYye7NGXPsoc1FofxWGe6IToOpNym6SUBoKUVNWPT69T-li5C8MISkgkJd3wRLtveM" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-soft/80 via-white/40 to-blue-50/30"></div>
            </div>
            <div className="relative z-10 p-16 max-w-xl">
                <div className="flex items-center gap-3 mb-10">
                    <div className="size-8 text-primary bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-2xl">smart_toy</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-text-primary">SaleAI</h1>
                </div>
                <h2 className="text-4xl font-light leading-tight tracking-tight text-text-primary mb-6">
                    Accelerate your pipeline with <span className="font-bold text-primary">intelligent insights</span>.
                </h2>
                <p className="text-lg text-text-secondary mb-10 font-light">
                    Join thousands of enterprise sales teams who are closing deals 3x faster using our predictive AI models.
                </p>
                <div className="flex items-center gap-6 text-sm font-medium text-text-secondary">
                    <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-white/50 shadow-sm backdrop-blur-sm">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        <span>SOC2 Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-white/50 shadow-sm backdrop-blur-sm">
                        <span className="material-symbols-outlined text-primary text-lg">shield</span>
                        <span>Enterprise Ready</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 xl:p-24 relative bg-background-light">
             <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
                 <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-xl">smart_toy</span>
                 </div>
                 <span className="text-xl font-bold text-text-primary">SaleAI</span>
             </div>

             <div className="w-full max-w-[400px] space-y-10">
                 <div className="text-center lg:text-left">
                     <h2 className="mt-6 text-3xl font-light tracking-tight text-text-primary">Welcome back</h2>
                     <p className="mt-2 text-sm text-text-secondary font-light">Please enter your details to sign in.</p>
                 </div>

                 <div className="flex flex-col gap-2">
                     <div className="flex border-b border-gray-100 relative">
                         <button
                             type="button"
                             onClick={() => setType('company')}
                             className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-all duration-200 ${type === 'company' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
                         >
                             Company
                         </button>
                         <button
                             type="button"
                             onClick={() => setType('personal')}
                             className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-all duration-200 ${type === 'personal' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
                         >
                             Personal
                         </button>
                     </div>
                 </div>

                 <div className="space-y-6">
                     <form onSubmit={handleSubmit} className="space-y-5">
                         <div className="space-y-4">
                             <Input
                                 label="Work Email"
                                 type="email"
                                 placeholder="name@company.com"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 required
                             />
                             <div>
                                 <div className="flex items-center justify-between mb-1.5">
                                     <label className="block text-xs font-medium uppercase tracking-wide text-text-secondary">Password</label>
                                     <a href="#" className="text-xs font-medium text-primary hover:text-primary-hover">Forgot password?</a>
                                 </div>
                                 <Input
                                     type="password"
                                     placeholder="••••••••"
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     required
                                 />
                             </div>
                         </div>
                         <div className="flex items-center">
                             <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-border-light text-primary focus:ring-primary/50" />
                             <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary font-light">Keep me logged in</label>
                         </div>
                         <Button type="submit" fullWidth>Sign In</Button>
                     </form>

                     <div className="relative py-2">
                         <div className="absolute inset-0 flex items-center">
                             <div className="w-full border-t border-border-light"></div>
                         </div>
                         <div className="relative flex justify-center text-xs uppercase tracking-wide">
                             <span className="bg-background-light px-3 text-text-secondary">Or continue with</span>
                         </div>
                     </div>

                     <div className="grid grid-cols-2 gap-3">
                         <Button variant="secondary" className="gap-2">
                             {/* Google Icon SVG */}
                             <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                             <span className="text-xs">Google</span>
                         </Button>
                         <Button variant="secondary" className="gap-2">
                             {/* Microsoft Icon SVG */}
                             <svg className="h-4 w-4" viewBox="0 0 23 23"><path d="M1 1h10v10H1z" fill="#f35325"></path><path d="M12 1h10v10H12z" fill="#81bc06"></path><path d="M1 12h10v10H1z" fill="#05a6f0"></path><path d="M12 12h10v10H12z" fill="#ffba08"></path></svg>
                             <span className="text-xs">Microsoft</span>
                         </Button>
                     </div>
                     <p className="text-center text-sm text-text-secondary font-light pt-4">
                         Don't have an account? <Link to="#" className="font-medium text-primary hover:text-primary-hover">Contact Sales</Link>
                     </p>
                 </div>
             </div>
        </div>
    </div>
  );
}
