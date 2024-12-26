import React from 'react';
import { FileText, Brain, Shield, Globe } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureCard } from '../components/home/FeatureCard';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { LanguagesSection } from '../components/home/LanguagesSection';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Translation",
    description: "Advanced neural networks ensure accurate and natural-sounding translations across 50+ languages"
  },
  {
    icon: Shield,
    title: "Certified Translations",
    description: "Official documents translated and certified for legal and professional use worldwide"
  },
  {
    icon: FileText,
    title: "Document Expertise",
    description: "Specialized in legal, medical, technical, and business document translations"
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Translations comply with international standards and local regulations"
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <LanguagesSection />
      <BenefitsSection />
    </div>
  );
}