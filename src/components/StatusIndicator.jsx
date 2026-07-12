import { cn } from '../lib/utils';

export function StatusIndicator({ status, size = 'md' }) {
  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  const colors = {
    online: 'bg-green-500',
    away: 'bg-amber-400',
    offline: 'bg-gray-500',
  };

  return (
    <span className="relative inline-flex items-center justify-center">
      {status === 'online' && (
        <span className={cn(
          'absolute inset-0 rounded-full bg-green-500 opacity-40',
          'animate-ping'
        )} />
      )}
      <span className={cn(
        'rounded-full relative inline-block',
        sizes[size],
        colors[status]
      )} />
    </span>
  );
}