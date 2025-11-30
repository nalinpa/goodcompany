import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X as CloseIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navigation = ({ 
  isLoggedIn, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  onLogout 
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
                Good Company Yoga
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" style={{ color: '#2D2D2D' }} className="hover:text-gray-600 transition-colors font-large">
                Home
              </Link>
              <Link to="/about" style={{ color: '#2D2D2D' }} className="hover:text-gray-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/classes" style={{ color: '#2D2D2D' }} className="hover:text-gray-600 transition-colors font-medium">
                Classes
              </Link>
              <button 
                className="px-5 py-3 
                          rounded-xl 
                          font-semibold 
                          bg-[#FE6C63] 
                          text-white 
                          shadow-[0_4px_12px_rgba(244,138,113,0.35)]
                          transition-all duration-150
                          hover:bg-[#E45B53]
                          hover:-translate-y-[1px]"
              >
                Wanna join?
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon size={26} style={{ color: '#6A3A78' }} />
              ) : (
                <Menu size={26} style={{ color: '#6A3A78' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <div 
            className="absolute top-20 left-4 right-4 bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 6rem)' }}
          >
            <div className="py-2">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
                style={{ color: '#2D2D2D' }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
                style={{ color: '#2D2D2D' }}
              >
                About
              </Link>
              <Link 
                to="/classes" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
                style={{ color: '#2D2D2D' }}
              >
                Classes
              </Link>
              
              <div className="px-6 py-4">
                <button 
                  className="w-full px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
                  style={{ backgroundColor: '#6A3A78', color: '#FFF8F3' }}
                >
                  Wanna join?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Logout Button */}
      {isLoggedIn && (
        <div className="fixed top-24 right-6 z-40">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow-lg text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#2C2C2C' }}
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;