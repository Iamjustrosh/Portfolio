export function formatDuration(startedAt) {
  if (!startedAt) return 'just started';

  const start = new Date(startedAt).getTime();
  const now = Date.now();
  const totalSeconds = Math.floor((now - start) / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m`;
  return 'just started';
}

export function formatIdleDuration(idleSince) {
  if (!idleSince) return '';

  const start = new Date(idleSince).getTime();
  const now = Date.now();
  const totalSeconds = Math.floor((now - start) / 1000);
  const minutes = Math.floor(totalSeconds / 60);

  if (minutes < 1) return 'just now';
  return `${minutes}m`;
}