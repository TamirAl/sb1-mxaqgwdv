import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { OrdersList } from '../components/dashboard/OrdersList';
import { useTranslationOrders } from '../hooks/useTranslationOrders';

export default function Dashboard() {
  const { orders, loading, error } = useTranslationOrders();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-center py-8">
        Loading your orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Translations</h1>
        <button
          onClick={() => navigate('/new-translation')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Translation</span>
        </button>
      </div>

      <OrdersList orders={orders} />
    </div>
  );
}