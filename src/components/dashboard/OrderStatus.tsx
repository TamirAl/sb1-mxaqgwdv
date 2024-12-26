import React from 'react';
import { Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import type { TranslationOrder } from '../../types';

const statusIcons = {
  pending: Clock,
  in_progress: AlertCircle,
  completed: CheckCircle,
  cancelled: XCircle,
};

const statusColors = {
  pending: 'text-yellow-500',
  in_progress: 'text-blue-500',
  completed: 'text-green-500',
  cancelled: 'text-red-500',
};

interface OrderStatusProps {
  status: TranslationOrder['status'];
}

export function OrderStatus({ status }: OrderStatusProps) {
  const Icon = statusIcons[status];
  const colorClass = statusColors[status];
  
  return (
    <div className="flex items-center space-x-2">
      <Icon className={`h-5 w-5 ${colorClass}`} />
      <span className="capitalize">{status.replace('_', ' ')}</span>
    </div>
  );
}