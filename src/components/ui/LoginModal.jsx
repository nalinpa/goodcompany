import React from 'react';

const LoginModal = ({ showLogin, password, setPassword, onLogin, onClose }) => {
  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#E80D11' }}>Admin Login</h2>
        <form onSubmit={onLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none"
            style={{ focusBorderColor: '#E2A9F1' }}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white rounded-lg hover:opacity-90"
              style={{ backgroundColor: '#E2A9F1' }}
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;