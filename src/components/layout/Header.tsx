import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe2, User, LogOut } from 'lucide-react';
import { AuthContext } from '../../lib/auth';
import { logout } from '../../lib/auth';
import { toast } from 'sonner';

export function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <header>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <Link to="/" className="flex items-center space-x-2">
              <Globe2 className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">TranslatorAI</span>
            </Link>
            
            <nav className="flex items-center space-x-6 text-sm">
              <Link to="/about" className="hover:text-blue-300 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-blue-300 transition-colors">
                Contact Us
              </Link>
              <Link to="/services" className="hover:text-blue-300 transition-colors">
                Services
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-semibold text-gray-800">
              Professional Translation Services
            </div>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/new-translation" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    New Translation
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}