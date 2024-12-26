import React from 'react';
import { languages } from '../../config/languages';

export function LanguagesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Translate from Any Language to English</h2>
            <p className="text-gray-600 mb-8">
              Our AI-powered platform supports translations from multiple languages to English, 
              ensuring accurate and natural-sounding results for your documents.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
              alt="Multiple languages translation"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}