import { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { rowToPresence } from '../lib/presence';

// If no update received in this long, treat as offline
const OFFLINE_THRESHOLD_MS = 2 * 60 * 1000; // 2 minutes

// How often we re-check staleness
const CHECK_INTERVAL_MS = 15 * 1000; // 15 seconds

export function usePresence() {
  const [rawPresence, setRawPresence] = useState(null);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());

  // Fetch initial state + subscribe to realtime changes
  useEffect(() => {
    async function fetchInitial() {
      const { data, error } = await supabase
        .from('presence')
        .select('*')
        .eq('user_id', 'default')
        .single();

      if (error) {
        console.error('[usePresence] Initial fetch failed:', error.message);
        setLoading(false);
        return;
      }

      if (data) {
        setRawPresence(rowToPresence(data));
      }
      setLoading(false);
    }

    fetchInitial();

    const channel = supabase
      .channel('presence-widget')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'presence',
          filter: 'user_id=eq.default',
        },
        (payload) => {
          setRawPresence(rowToPresence(payload.new));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Tick the clock every 15s so staleness gets re-evaluated
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), CHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  // Derive the actual displayed presence
  // If the last update is older than the threshold, force offline
  // regardless of what status the database says
  const presence = useMemo(() => {
    if (!rawPresence) return null;

    const lastUpdate = new Date(rawPresence.updatedAt).getTime();
    const isStale = now - lastUpdate > OFFLINE_THRESHOLD_MS;

    if (isStale && rawPresence.status !== 'offline') {
      return { ...rawPresence, status: 'offline' };
    }

    return rawPresence;
  }, [rawPresence, now]);

  return { presence, loading };
}