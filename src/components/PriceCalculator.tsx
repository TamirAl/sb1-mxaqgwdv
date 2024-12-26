import React from 'react';
import { Calculator } from 'lucide-react';

interface PriceCalculatorProps {
  onPriceCalculated: (price: number) => void;
  numberOfFiles: number;
}

export function PriceCalculator({ onPriceCalculated, numberOfFiles }: PriceCalculatorProps) {
  const pricePerDocument = 10;
  const totalPrice = numberOfFiles * pricePerDocument;

  React.useEffect(() => {
    onPriceCalculated(totalPrice);
  }, [numberOfFiles, onPriceCalculated]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Price Summary</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Documents to translate:</span>
          <span className="font-medium">{numberOfFiles}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Price per document:</span>
          <span className="font-medium">${pricePerDocument.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total Price:</span>
            <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}