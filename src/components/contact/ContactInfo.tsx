import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">info@translatorai.com</p>
            <p className="text-gray-600">support@translatorai.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">
              123 Translation Street
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}