import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(({ onShowLogin }) => {
  return (
    <footer className="py-16 text-white" style={{ backgroundColor: '#2D2D2D' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Courier Prime, monospace', color: '#F48A71' }}>
              Good Company Yoga
            </h3>
            <p className="text-gray-400">Wellington, New Zealand</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg" style={{ color: '#E2A9F1' }}>Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/classes" className="block text-gray-400 hover:text-white transition-colors">
                Classes
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg" style={{ color: '#E2A9F1' }}>Connect</h4>
            <div className="space-y-3 text-gray-400">
              <p>📧 <a href="mailto:hello@goodcompanyyoga.co.nz">hello@goodcompanyyoga.co.nz</a></p>
              <p>📱 <a href="https://instagram.com/goodcompanyyogawelly">Instagram @goodcompanyyoga</a></p>
              <p>📍 Wellington Central</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-gray-400 text-sm" style={{ borderTopColor: '#6A3A78' }}>
          <p>© 2025 Good Company Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;