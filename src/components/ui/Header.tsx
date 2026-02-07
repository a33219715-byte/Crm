import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-surface-light/80 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-text-primary group">
          <div className="size-8 text-primary bg-primary-soft rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">smart_toy</span>
          </div>
          <h2 className="text-xl font-semibold tracking-tight">urleads</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-normal text-text-secondary hover:text-primary transition-colors">Home</Link>
          <Link to="/#how-it-works" className="text-sm font-normal text-text-secondary hover:text-primary transition-colors">How it Works</Link>
          <Link to="/about" className="text-sm font-normal text-text-secondary hover:text-primary transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-4">
            {isAuthenticated ? (
                <Link to="/app">
                    <Button variant="primary" size="sm">Dashboard</Button>
                </Link>
            ) : (
                <Link to="/signin">
                    <Button variant="outline" size="sm" className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-none">Sign In</Button>
                </Link>
            )}
        </div>
      </div>
    </header>
  );
};
