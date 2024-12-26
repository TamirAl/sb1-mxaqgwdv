import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Cost-Effective",
    description: "Save up to 60% compared to traditional translation services while maintaining quality"
  },
  {
    title: "Time-Saving",
    description: "Get your translations up to 5x faster with our AI-powered platform"
  },
  {
    title: "Quality Assured",
    description: "Every translation is verified by professional linguists for accuracy"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose TranslatorAI?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-start space-x-4">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}