import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We provide professional translation services powered by AI technology
              and verified by expert linguists worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services#document" className="hover:text-blue-300">
                  Document Translation
                </Link>
              </li>
              <li>
                <Link to="/services#legal" className="hover:text-blue-300">
                  Legal Translation
                </Link>
              </li>
              <li>
                <Link to="/services#technical" className="hover:text-blue-300">
                  Technical Translation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@translatorai.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Translation St, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TranslatorAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}