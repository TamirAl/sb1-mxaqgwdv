import React from 'react';
import { FileText } from 'lucide-react';
import { OrderStatus } from './OrderStatus';
import type { TranslationOrder } from '../../types';

interface OrdersListProps {
  orders: TranslationOrder[];
}

export function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No translation orders found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-4">
              <FileText className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-medium">
                  {order.source_language} → {order.target_language}
                </h3>
                <p className="text-sm text-gray-500">
                  Created: {new Date(order.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <OrderStatus status={order.status} />
              <span className="font-medium">${order.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}