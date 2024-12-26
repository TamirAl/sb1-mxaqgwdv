import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About TranslatorAI</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          For over three decades, we've been the trusted name in professional translation services,
          combining human expertise with cutting-edge AI technology to deliver unparalleled results.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Founded in 1993, TranslatorAI brings together a team of seasoned professional translators
            with decades of experience in legal, technical, medical, and business document translation.
            Our commitment to excellence has made us a leader in the industry, serving clients worldwide
            with precise, culturally-aware translations.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Today, we've revolutionized our services by integrating advanced AI technology with our
            human expertise. This powerful combination allows us to deliver high-quality translations
            in record time - from just a few hours to one business day - while maintaining the
            accuracy and attention to detail that our clients have come to expect.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Professional translators with specialized industry knowledge</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
          <p className="text-gray-600">AI-powered translations in hours, not days</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-gray-600">Multi-step verification process for accuracy</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">30+ Years</h3>
          <p className="text-gray-600">Decades of translation excellence</p>
        </div>
      </section>
    </div>
  );
}