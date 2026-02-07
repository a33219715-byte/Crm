import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-light pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 text-text-primary mb-6">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <h2 className="text-lg font-semibold">urleads</h2>
            </div>
            <p className="text-text-secondary font-light text-sm mb-6 leading-relaxed">
              The AI engine for modern sales teams. Automate, integrate, and close more deals.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-6 text-text-primary">Product</h3>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-6 text-text-primary">Resources</h3>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-6 text-text-primary">Legal</h3>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary font-light">© 2023 urleads Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-text-secondary font-light">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
            System Operational
          </div>
        </div>
      </div>
    </footer>
  );
};
