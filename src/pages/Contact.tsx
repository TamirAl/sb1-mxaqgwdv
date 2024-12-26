import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Get in touch with our team for any questions or support
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}