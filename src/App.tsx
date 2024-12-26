import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './components/auth/AuthProvider';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NewTranslation from './pages/NewTranslation';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/new-translation"
                element={
                  <ProtectedRoute>
                    <NewTranslation />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}