import { Layout } from '../components/ui/Layout';
import { Card, CardContent } from '../components/ui/Card';

export default function About() {
  return (
    <Layout>
      <div className="bg-background-light py-20 px-6">
        <div className="max-w-[800px] mx-auto space-y-16">
          {/* Mission & Product Overview */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-text-primary">
              Empowering sales teams with <br/>
              <span className="font-medium text-primary">intelligent automation</span>
            </h1>
            <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
              At SaleAI, we believe that salespeople should spend their time building relationships, not answering repetitive FAQs.
              Our mission is to democratize access to advanced AI agents for businesses of all sizes, enabling you to scale your outreach and support without scaling your headcount linearly.
            </p>
          </section>

          {/* Capabilities */}
          <section>
            <h2 className="text-2xl font-medium text-text-primary mb-8 text-center">What SaleAI Can Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CapabilityCard
                icon="mark_chat_read"
                title="CRM Read & Write"
                desc="Seamlessly access and update lead information in your CRM during conversations."
              />
              <CapabilityCard
                icon="person_add"
                title="Add Leads"
                desc="Automatically capture new leads from chats and sync them to your pipeline."
              />
              <CapabilityCard
                icon="update"
                title="Update Stages"
                desc="Move deals forward by updating opportunity stages based on conversation intent."
              />
              <CapabilityCard
                icon="summarize"
                title="Daily Summaries"
                desc="Receive automated summaries of all lead interactions assigned to you."
              />
              <CapabilityCard
                icon="history_edu"
                title="Audit Trail"
                desc="Complete history of all AI and human interactions for compliance and training."
              />
              <CapabilityCard
                icon="chat"
                title="Multi-Platform"
                desc="Engage leads on WhatsApp or Telegram from a single unified inbox."
              />
            </div>
          </section>

          {/* Optional Apps */}
           <section className="bg-white p-8 rounded-2xl border border-border-light shadow-sm">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-purple-50 text-purple-500 rounded-xl">
                 <span className="material-symbols-outlined text-2xl">extension</span>
               </div>
               <div>
                 <h3 className="text-xl font-medium text-text-primary mb-2">Extensible with Sales Apps</h3>
                 <p className="text-text-secondary font-light mb-4">
                   Connect optional sales apps like <strong>Home Finder</strong> for real estate, or build your own custom API connections to fetch product data, check inventory, or book appointments.
                 </p>
               </div>
             </div>
           </section>

          {/* Example Questions */}
          <section>
             <h2 className="text-2xl font-medium text-text-primary mb-8 text-center">Example Questions to Ask SaleAI</h2>
             <div className="grid gap-4">
               <QuestionCard text="Which leads got assigned to me today?" />
               <QuestionCard text="Update the status of John Doe to 'Qualified'." />
               <QuestionCard text="Send a follow-up message to the lead from Acme Corp." />
               <QuestionCard text="What is the price of the 3-bedroom apartment in downtown?" />
             </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

function CapabilityCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col gap-4">
        <div className="size-10 rounded-lg bg-primary-soft flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <h3 className="font-medium text-text-primary mb-1">{title}</h3>
          <p className="text-sm text-text-secondary font-light">{desc}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function QuestionCard({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border-light shadow-sm">
      <div className="p-2 bg-primary/10 rounded-full text-primary">
         <span className="material-symbols-outlined text-xl">smart_toy</span>
      </div>
      <p className="text-text-primary font-medium italic">"{text}"</p>
    </div>
  )
}
