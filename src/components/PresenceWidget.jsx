import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { usePresence } from '../hooks/usePresence';
import { PresenceCard } from './PresenceCard';
import { StatusIndicator } from './StatusIndicator';
import { ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.userAgent.toLowerCase().includes('mobi')
  );
}

export function PresenceWidget() {
  const { presence, loading } = usePresence();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ref needed to prevent onClick > onMouseLeave race on mobile
  const closingTimeoutRef = useRef();

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  if (loading || !presence) return null;

  const chipStyles = {
    online: 'border-green-500/20  bg-green-500/5  hover:border-green-500/40',
    away:   'border-amber-400/20  bg-amber-400/5  hover:border-amber-400/40',
    offline:'border-gray-500/20   bg-gray-500/5   hover:border-gray-500/40',
  };

  // PC (hover) handlers
  function handleMouseEnter() {
    if (!isMobile) setOpen(true);
    // Clear any leave delay if rapidly re-entered
    if (closingTimeoutRef.current) {
      clearTimeout(closingTimeoutRef.current);
      closingTimeoutRef.current = null;
    }
  }
  function handleMouseLeave() {
    if (!isMobile) {
      // Slight delay to avoid flicker if moving mouse toward card's close btn
      closingTimeoutRef.current = setTimeout(() => setOpen(false), 120);
    }
  }
  // Mobile (click) handler
  function handleClick() {
    if (isMobile) setOpen((prev) => !prev);
  }

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
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
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={open}
        type="button"
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