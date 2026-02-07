import { Link } from 'react-router-dom';
import { Layout } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-36 px-6 overflow-hidden bg-background-light">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4"></div>

          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-8 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border-light w-fit mx-auto md:mx-0 shadow-sm">
                      <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">AI Powered Sales V2.0</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-text-primary leading-[1.1] tracking-tight">
                      Your AI Sales <br/>
                      <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Assistant & Manager</span>
                  </h1>
                  <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                      Seamlessly bridge your CRM, APIs, and social channels. Let SaleAI automate conversations, turning leads into deals effortlessly.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                      <Link to="/signin">
                          <Button size="lg" className="rounded-full shadow-lg hover:-translate-y-0.5 transition-transform group">
                              Get Started
                              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                          </Button>
                      </Link>
                      <Button variant="secondary" size="lg" className="rounded-full">
                          <span className="material-symbols-outlined mr-2 text-xl text-primary">play_circle</span>
                          Watch Demo
                      </Button>
                  </div>
                  {/* Trust checkmarks */}
                  <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-sm text-text-secondary font-light">
                      <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-green-400">check</span>
                          <span>No credit card required</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-green-400">check</span>
                          <span>14-day free trial</span>
                      </div>
                  </div>
              </div>

              {/* Hero Image / Chat UI Mockup */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-white rounded-[2rem] p-4 shadow-xl ring-1 ring-border-light overflow-hidden group">
                  <div className="absolute inset-4 rounded-[1.5rem] bg-gradient-to-br from-primary-soft to-white overflow-hidden">
                      {/* Placeholder background */}
                      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyQaur92-FyffqWWSv9CxA6S2bIuwKJypcErxZ2DEKngOhsWcT94vreZ0D_EfMlj4fbqYoc9PotGe9EqEJMyeEugDRifA4OnCMtW_aLWJFiBf19zR2LAMMRonMLMgyJPT5DSYiF3XkOamLVAakojS3oT-NXVqY6qmn0Ma9MyTjqgPxtELF68wSrvUEmvmh5vgIvTFiOovWth8vCMcwJdyTEMfHjUXbNrfYVvS8u_A2SL1foOasqhUIy96zUFzzAJMuUbr2QNyz2fE')" }}></div>
                  </div>
                  {/* Floating Chat Bubble Mockup */}
                  <div className="absolute bottom-10 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white ring-1 ring-border-light/50 transform transition-transform duration-500 group-hover:-translate-y-2">
                       <div className="flex items-center gap-4 mb-6 border-b border-border-light pb-4">
                          <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                              <span className="material-symbols-outlined text-xl">chat</span>
                          </div>
                          <div>
                              <div className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Active Conversation</div>
                              <div className="text-sm font-medium text-text-primary">Lead #4922 - WhatsApp</div>
                          </div>
                          <div className="ml-auto px-3 py-1 rounded-full text-[10px] bg-primary/10 text-primary font-bold tracking-wide">AI ACTIVE</div>
                      </div>
                      <div className="space-y-4">
                          <div className="flex gap-3">
                              <div className="size-8 rounded-full bg-gray-100 flex-shrink-0 border border-gray-200"></div>
                              <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-sm text-text-secondary shadow-sm border border-border-light w-3/4 font-light">
                                  Can you integrate with Salesforce?
                              </div>
                          </div>
                          <div className="flex gap-3 flex-row-reverse">
                              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 border border-primary/20">
                                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                              </div>
                              <div className="bg-gradient-to-r from-primary to-sky-400 text-white p-3 rounded-2xl rounded-tr-none text-sm w-3/4 shadow-lg shadow-primary/20 font-light">
                                  Yes! SaleAI connects directly to Salesforce. Would you like to see a quick documentation link or book a demo?
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-border-light bg-surface-light">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
              <p className="text-center text-xs font-semibold text-text-secondary mb-8 uppercase tracking-[0.2em]">Trusted by leading sales teams</p>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                  {/* Mock Logos */}
                  <div className="flex items-center gap-2 text-lg font-medium text-text-primary"><span className="material-symbols-outlined font-light">api</span> TechFlow</div>
                  <div className="flex items-center gap-2 text-lg font-medium text-text-primary"><span className="material-symbols-outlined font-light">cloud_circle</span> CloudScale</div>
                  <div className="flex items-center gap-2 text-lg font-medium text-text-primary"><span className="material-symbols-outlined font-light">view_in_ar</span> CubeSoft</div>
                  <div className="flex items-center gap-2 text-lg font-medium text-text-primary"><span className="material-symbols-outlined font-light">bolt</span> SwiftSales</div>
              </div>
          </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 bg-white relative">
         <div className="max-w-[1200px] mx-auto">
             <div className="text-center mb-20">
                 <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-6">How SaleAI Works</h2>
                 <p className="text-text-secondary text-lg font-light max-w-2xl mx-auto">
                     We sit between your data sources and your communication channels, orchestrating the perfect sales conversation every time.
                 </p>
             </div>

             <div className="grid md:grid-cols-3 gap-12 relative">
                  <div className="hidden md:block absolute top-16 left-0 w-full h-[1px] bg-border-light -z-10"></div>

                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center group">
                      <div className="size-32 rounded-full bg-white border border-border-light flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <span className="material-symbols-outlined text-4xl text-text-secondary font-light">database</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3 text-text-primary">1. Connect Data</h3>
                      <p className="text-text-secondary font-light text-sm px-6 leading-relaxed">
                          Link your CRM (HubSpot, Salesforce) and expose your APIs. SaleAI ingests your product knowledge instantly.
                      </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center group">
                      <div className="size-32 rounded-full bg-white border border-primary-soft flex items-center justify-center mb-8 shadow-lg shadow-primary/10 ring-4 ring-primary-soft group-hover:scale-105 transition-transform duration-300 z-10">
                          <span className="material-symbols-outlined text-4xl text-primary font-light">psychology</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3 text-text-primary">2. AI Processing</h3>
                      <p className="text-text-secondary font-light text-sm px-6 leading-relaxed">
                          Our engine processes incoming queries, matches intent with your data, and drafts the perfect response.
                      </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center group">
                      <div className="size-32 rounded-full bg-white border border-border-light flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <div className="flex gap-1">
                              <span className="material-symbols-outlined text-3xl text-green-400 font-light">chat</span>
                              <span className="material-symbols-outlined text-3xl text-sky-300 font-light">send</span>
                          </div>
                      </div>
                      <h3 className="text-xl font-medium mb-3 text-text-primary">3. Engage & Close</h3>
                      <p className="text-text-secondary font-light text-sm px-6 leading-relaxed">
                          Responses are sent automatically via WhatsApp or Telegram. Human takeover is triggered only when needed.
                      </p>
                  </div>
             </div>
         </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background-light">
          <div className="max-w-[1200px] mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-4">Features built for scale</h2>
                      <p className="text-text-secondary font-light max-w-xl text-lg">
                          Everything you need to automate your sales funnel without losing the personal touch.
                      </p>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary-hover">
                      View all features <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                  </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon="person_add" color="sky" title="Smart Lead Capture" desc="Automatically identify and qualify leads from social interactions based on your specific criteria." />
                  <FeatureCard icon="webhook" color="purple" title="API First" desc="Connect custom endpoints. If it has an API, SaleAI can read from it and write to it during conversations." />
                  <FeatureCard icon="forum" color="green" title="Omnichannel Inbox" desc="Manage WhatsApp, Telegram, Messenger, and Email threads from a single unified dashboard." />
                  <FeatureCard icon="schedule" color="orange" title="24/7 Availability" desc="Never miss a lead because of timezone differences. Your AI agent is always awake and selling." />
                  <FeatureCard icon="analytics" color="red" title="Conversion Analytics" desc="Deep insights into conversation quality, drop-off points, and automated conversion rates." />
                  <FeatureCard icon="language" color="teal" title="Multilingual Support" desc="Automatically detect language and respond in 50+ languages instantly without configuration." />
              </div>
          </div>
      </section>

    </Layout>
  );
}

function FeatureCard({ icon, color, title, desc }: { icon: string, color: string, title: string, desc: string }) {
    // Mapping color to Tailwind classes roughly
    const colorClasses: Record<string, string> = {
        sky: "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white",
        purple: "bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
        green: "bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white",
        orange: "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
        red: "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white",
        teal: "bg-teal-50 text-teal-500 group-hover:bg-teal-500 group-hover:text-white",
    };

    return (
        <div className="bg-white p-8 rounded-2xl border border-border-light hover:border-primary/20 transition-all group shadow-sm hover:shadow-lg">
            <div className={`size-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${colorClasses[color]}`}>
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-3">{title}</h3>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
