import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="h-8 w-8 text-blue-500 mr-2" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          AI-Powered Translation Excellence
        </h1>
      </div>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Professional document translations powered by advanced AI technology and verified by expert linguists
      </p>
      <Link
        to="/new-translation"
        className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
      >
        Start Translation
      </Link>
    </section>
  );
}