import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe2, User, LogOut } from 'lucide-react';
import { AuthContext } from '../lib/auth';
import { logout } from '../lib/auth';
import { toast } from 'sonner';

export default function Navbar() {
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
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-semibold">TranslatorAI</span>
          </Link>
          
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
    </nav>
  );
}