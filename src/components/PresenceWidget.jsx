import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { usePresence } from '../hooks/usePresence';
import { PresenceCard } from './PresenceCard';
import { StatusIndicator } from './StatusIndicator';
import { ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export function PresenceWidget() {
  const { presence, loading } = usePresence();
  const [open, setOpen] = useState(false);

  if (loading || !presence) return null;

  const chipStyles = {
    online: 'border-green-500/20  bg-green-500/5  hover:border-green-500/40',
    away:   'border-amber-400/20  bg-amber-400/5  hover:border-amber-400/40',
    offline:'border-gray-500/20   bg-gray-500/5   hover:border-gray-500/40',
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2.5"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      {/* Card — animated in/out */}
      <AnimatePresence>
        {open && (
          <PresenceCard
            presence={presence}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chip */}
      <button
        onMouseEnter={() => setOpen(prev => !prev)}
        onMouseLeave={() => setOpen(prev => !prev)}
        className={cn(
          'flex items-center gap-2 rounded-full px-3.5 py-2 border transition-all duration-200',
          'cursor-pointer select-none outline-none',
          chipStyles[presence.status]
        )}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        <StatusIndicator status={presence.status} size="sm" />
        <span className="text-[13px] font-medium text-slate-200">
          {presence.status === 'online'
            ? 'Online'
            : presence.status === 'away'
            ? 'Away'
            : 'Offline'}
        </span>
        <ChevronUp
          size={12}
          className={cn(
            'text-gray-500 transition-transform duration-200',
            open ? 'rotate-0' : 'rotate-180'
          )}
        />
      </button>
    </div>
  );
}