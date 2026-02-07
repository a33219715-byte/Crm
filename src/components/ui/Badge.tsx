import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'neutral' | 'info';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          {
            'bg-green-100 text-green-800 border border-green-200': variant === 'success',
            'bg-amber-100 text-amber-800 border border-amber-200': variant === 'warning',
            'bg-red-100 text-red-800 border border-red-200': variant === 'error',
            'bg-gray-100 text-gray-800 border border-gray-200': variant === 'neutral',
            'bg-blue-100 text-blue-800 border border-blue-200': variant === 'info',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
