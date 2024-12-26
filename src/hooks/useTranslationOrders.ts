import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { TranslationOrder } from '../types';

export function useTranslationOrders() {
  const [orders, setOrders] = useState<TranslationOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data: orders, error } = await supabase
          .from('translation_orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOrders(orders);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return { orders, loading, error };
}