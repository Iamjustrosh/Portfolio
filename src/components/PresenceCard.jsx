import { formatDuration, formatIdleDuration } from '../lib/duration';
import { StatusIndicator } from './StatusIndicator';
import {
  Folder,
  FileCode,
  Code2,
  Timer,
  Music2,
  Activity,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';

const LANGUAGE_BADGES = {
  typescript:      { label: 'TS',   bg: 'bg-blue-900/60',   text: 'text-blue-300'   },
  typescriptreact: { label: 'TSX',  bg: 'bg-blue-900/60',   text: 'text-blue-300'   },
  javascript:      { label: 'JS',   bg: 'bg-yellow-900/60', text: 'text-yellow-300' },
  javascriptreact: { label: 'JSX',  bg: 'bg-yellow-900/60', text: 'text-yellow-300' },
  python:          { label: 'PY',   bg: 'bg-green-900/60',  text: 'text-green-300'  },
  rust:            { label: 'RS',   bg: 'bg-orange-900/60', text: 'text-orange-300' },
  go:              { label: 'GO',   bg: 'bg-cyan-900/60',   text: 'text-cyan-300'   },
  css:             { label: 'CSS',  bg: 'bg-purple-900/60', text: 'text-purple-300' },
  html:            { label: 'HTML', bg: 'bg-red-900/60',    text: 'text-red-300'    },
  json:            { label: 'JSON', bg: 'bg-sky-900/60',    text: 'text-sky-300'    },
};

function getLanguageBadge(lang) {
  return LANGUAGE_BADGES[lang?.toLowerCase()] ?? {
    label: lang?.toUpperCase()?.slice(0, 4) ?? '?',
    bg: 'bg-gray-800',
    text: 'text-gray-400',
  };
}

const LANGUAGE_LABELS = {
  typescript:      'TypeScript',
  typescriptreact: 'TypeScript',
  javascript:      'JavaScript',
  javascriptreact: 'JavaScript',
  python:          'Python',
  rust:            'Rust',
  go:              'Go',
  css:             'CSS',
  html:            'HTML',
  json:            'JSON',
};

function getLanguageLabel(lang) {
  return LANGUAGE_LABELS[lang?.toLowerCase()] ?? lang ?? 'Unknown';
}

function formatLastActive(idleSince) {
  if (!idleSince) return '';
  return new Date(idleSince).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function Row({ icon: Icon, iconColor, label, children }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-2.5 border-b border-white/[0.04] last:border-0">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
        <Icon size={13} className={iconColor} />
      </div>
      <span className="text-[10px] sm:text-[11px] text-gray-500 w-16 sm:w-20 shrink-0">
        {label}
      </span>
      <span className="text-[12px] sm:text-[13px] text-slate-200 font-medium flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
        {children}
      </span>
    </div>
  );
}

export function PresenceCard({ presence, onClose }) {
  const { status } = presence;
  const badge = getLanguageBadge(presence.language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      // ─── Key responsive change ───────────────────────────────
      // On mobile: stretch to fill available width minus the widget's
      // right-6 offset and a matching left margin so it doesn't touch edges.
      // On sm and up: fixed 360px width, anchored to the right.
      className="
        w-[calc(100vw-3rem)]
        sm:w-[360px]
        rounded-[18px]
        border border-white/[0.08]
        p-4 sm:p-5
      "
      style={{
        backgroundColor: 'rgba(13, 17, 23, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >

      {/* ── Online ── */}
      {status === 'online' && (
        <>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2.5">
              <StatusIndicator status="online" size="lg" />
              <span className="text-[15px] sm:text-[17px] font-semibold text-white">
                Online
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-md hover:bg-white/5"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="h-px bg-white/[0.06] my-3" />

          <Row icon={Folder} iconColor="text-green-400" label="In">
            <span className="text-slate-300 truncate">
              {presence.workspace}
              <span className="text-gray-600 mx-1">/</span>
              {presence.folder}
            </span>
          </Row>

          <Row icon={FileCode} iconColor="text-blue-400" label="Working on">
            <span className="truncate max-w-[80px] sm:max-w-none">
              {presence.file}
            </span>
            {presence.language && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${badge.bg} ${badge.text}`}>
                {badge.label}
              </span>
            )}
            {presence.cursorLine && (
              <span className="text-gray-600 text-[11px] sm:text-[12px] ml-auto shrink-0">
                {presence.cursorLine}:{presence.cursorColumn}
              </span>
            )}
          </Row>

          <Row icon={Code2} iconColor="text-purple-400" label="Language">
            {getLanguageLabel(presence.language)}
          </Row>

          <Row icon={Timer} iconColor="text-amber-400" label="Coding for">
            {formatDuration(presence.sessionStartedAt)}
          </Row>

          <Row icon={Music2} iconColor="text-pink-400" label="Listening">
            <span className="text-gray-600">Not connected</span>
          </Row>
        </>
      )}

      {/* ── Away ── */}
      {status === 'away' && (
        <>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Timer size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-[15px] sm:text-[17px] font-semibold text-white">
                  Away
                </div>
                <div className="text-[12px] sm:text-[13px] text-amber-400 mt-0.5">
                  Idle for {formatIdleDuration(presence.idleSince)}
                </div>
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-md hover:bg-white/5"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="h-px bg-white/[0.06] my-3" />

          <div className="flex items-center gap-3 py-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
              <Activity size={13} className="text-gray-500" />
            </div>
            <span className="text-[11px] sm:text-[12px] text-gray-500">
              Last active
            </span>
            <span className="text-[12px] sm:text-[13px] text-slate-300 font-medium ml-1">
              {formatLastActive(presence.idleSince)}
            </span>
          </div>
        </>
      )}

      {/* ── Offline ── */}
      {status === 'offline' && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <StatusIndicator status="offline" size="lg" />
              <span className="text-[15px] sm:text-[17px] font-semibold text-white">
                Offline
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-md hover:bg-white/5"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className="h-px bg-white/[0.06] my-3" />
          <p className="text-[12px] sm:text-[13px] text-gray-500">
            Not currently coding
          </p>
        </>
      )}

    </motion.div>
  );
}