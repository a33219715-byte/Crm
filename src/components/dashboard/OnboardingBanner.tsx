import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const OnboardingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('saleai_onboarding_dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('saleai_onboarding_dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Card className="mb-8 border-primary/20 bg-primary-soft/30">
      <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-primary/20 rounded-lg text-primary">
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
             </div>
             <h2 className="text-lg font-bold text-text-primary">Welcome to SaleAI</h2>
          </div>
          <p className="text-sm text-text-secondary mb-4">Let's get your workspace ready. Complete these steps to start automating:</p>

          <div className="flex flex-wrap gap-4">
            <Step number={1} text="Connect CRM" />
            <Step number={2} text="Messaging Channels" />
            <Step number={3} text="Sales Apps" />
            <Step number={4} text="Invite Team" />
          </div>
        </div>

        <Button variant="ghost" size="sm" onClick={handleDismiss} className="text-text-secondary hover:text-primary whitespace-nowrap">
          Dismiss
        </Button>
      </CardContent>
    </Card>
  );
};

function Step({ number, text }: { number: number, text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-primary/10">
      <div className="size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">
        {number}
      </div>
      <span className="text-xs font-medium text-text-primary">{text}</span>
    </div>
  )
}
