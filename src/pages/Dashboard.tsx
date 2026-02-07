import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { OnboardingBanner } from '../components/dashboard/OnboardingBanner';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-border-light bg-surface-light px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="size-8 text-primary bg-primary-soft rounded-lg p-1.5 flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">smart_toy</span>
            </div>
            <h1 className="text-lg font-bold text-text-primary">urleads <span className="text-text-secondary font-normal text-sm ml-2">Workspace</span></h1>
        </div>
        <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-sm text-text-secondary bg-gray-50 px-3 py-1.5 rounded-full border border-border-light">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                System Operational
             </div>
             <Button variant="outline" size="sm" onClick={logout}>Sign Out</Button>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-8 max-w-[1400px] mx-auto w-full">
        <OnboardingBanner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CRM Connection */}
            <Card className="h-fit">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                             <span className="material-symbols-outlined">cloud_sync</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary">Connect CRM</h3>
                            <p className="text-xs text-text-secondary">Sync leads and contacts</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="border border-primary/30 bg-primary-soft/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary-soft/50 transition-colors">
                            <span className="material-symbols-outlined text-3xl text-primary">hub</span>
                            <span className="text-sm font-semibold text-text-primary">HubSpot</span>
                             <Badge variant="success">Connected</Badge>
                         </div>
                         <div className="border border-border-light bg-surface-light rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors opacity-60">
                            <span className="material-symbols-outlined text-3xl text-blue-400">cloud</span>
                            <span className="text-sm font-semibold text-text-primary">Salesforce</span>
                         </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border-light">
                        <h4 className="text-sm font-semibold text-text-primary">Manual Configuration</h4>
                        <div className="grid gap-4">
                            <Input label="CRM Base URL" placeholder="https://api.hubapi.com" defaultValue="https://api.hubapi.com/crm/v3" />
                            <Input label="API Key" type="password" placeholder="pat-na1-..." value="••••••••••••••••" readOnly />
                        </div>
                        <div className="flex gap-3">
                            <Button variant="primary">Save Configuration</Button>
                            <Button variant="outline">Test Access</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Messaging Channels */}
            <Card className="h-fit">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                             <span className="material-symbols-outlined">chat</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary">Messaging</h3>
                            <p className="text-xs text-text-secondary">WhatsApp & Telegram</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-0 divide-y divide-border-light">
                    <div className="flex items-center justify-between py-4 pt-0">
                         <div className="flex items-center gap-4">
                             <div className="size-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                 <span className="material-symbols-outlined">call</span>
                             </div>
                             <div>
                                 <p className="font-semibold text-text-primary">WhatsApp Business</p>
                                 <p className="text-xs text-text-secondary">Direct API Integration</p>
                             </div>
                         </div>
                         <div className="flex flex-col md:flex-row items-end md:items-center gap-3">
                             <Badge variant="success">Active</Badge>
                             <Button variant="outline" size="sm">Configure</Button>
                         </div>
                    </div>
                    <div className="flex items-center justify-between py-4 pb-0">
                         <div className="flex items-center gap-4">
                             <div className="size-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-500">
                                 <span className="material-symbols-outlined">send</span>
                             </div>
                             <div>
                                 <p className="font-semibold text-text-primary">Telegram Bot</p>
                                 <p className="text-xs text-text-secondary">@urleads_Bot</p>
                             </div>
                         </div>
                         <div className="flex flex-col md:flex-row items-end md:items-center gap-3">
                             <Badge variant="neutral">Not Connected</Badge>
                             <Button variant="secondary" size="sm">Connect</Button>
                         </div>
                    </div>
                </CardContent>
            </Card>

            {/* Sales Apps */}
            <Card className="h-fit">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                             <span className="material-symbols-outlined">extension</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary">Sales Apps</h3>
                            <p className="text-xs text-text-secondary">Extend functionality</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">+ Add Custom</Button>
                </CardHeader>
                <CardContent className="space-y-0 divide-y divide-border-light">
                     <div className="flex items-center justify-between py-4 pt-0">
                         <div className="flex items-center gap-4">
                             <div className="size-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                                 <span className="material-symbols-outlined">home</span>
                             </div>
                             <div>
                                 <p className="font-semibold text-text-primary">Home Finder</p>
                                 <p className="text-xs text-text-secondary">Real Estate Listings</p>
                             </div>
                         </div>
                         <Button variant="primary" size="sm">Connect</Button>
                    </div>
                     <div className="flex items-center justify-between py-4 pb-0">
                         <div className="flex items-center gap-4">
                             <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                                 <span className="material-symbols-outlined">webhook</span>
                             </div>
                             <div>
                                 <p className="font-semibold text-text-primary">Custom API</p>
                                 <p className="text-xs text-text-secondary">Inventory Check</p>
                             </div>
                         </div>
                         <Button variant="secondary" size="sm">Edit</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Team and Roles */}
            <Card className="h-fit">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                             <span className="material-symbols-outlined">group</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary">Team & Roles</h3>
                            <p className="text-xs text-text-secondary">Manage access</p>
                        </div>
                    </div>
                    <Button variant="primary" size="sm" className="gap-1">
                        <span className="material-symbols-outlined text-sm">person_add</span>
                        Invite
                    </Button>
                </CardHeader>
                <CardContent className="space-y-0 divide-y divide-border-light">
                    <TeamMember name="Alex Morgan" email="alex@company.com" role="Admin" />
                    <TeamMember name="Sarah Miller" email="sarah@company.com" role="Manager" />
                    <TeamMember name="David Kim" email="david@company.com" role="Rep" />
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}

function TeamMember({ name, email, role }: { name: string, email: string, role: string }) {
    const roleColors: Record<string, "info" | "success" | "neutral" | "warning"> = {
        "Admin": "info",
        "Manager": "warning",
        "Rep": "neutral"
    };

    return (
        <div className="flex items-center justify-between py-4 pt-0 last:pb-0 first:pt-0">
            <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                    {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <p className="text-sm font-medium text-text-primary">{name}</p>
                    <p className="text-xs text-text-secondary">{email}</p>
                </div>
            </div>
            <Badge variant={roleColors[role] || "neutral"}>{role}</Badge>
        </div>
    )
}
