import React from 'react';
import { Edit2, Save, X } from 'lucide-react';

const EditableBlock = ({ 
  id, 
  value, 
  multiline = false, 
  className = "",
  isLoggedIn,
  editingId,
  tempContent,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onTempContentChange
}) => {
  const isEditing = editingId === id;

  return (
    <div className="relative group">
      {isEditing ? (
        <div className="space-y-2">
          {multiline ? (
            <textarea
              value={tempContent[id] || value}
              onChange={(e) => onTempContentChange(id, e.target.value)}
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-purple-400"
              style={{ borderColor: '#E2A9F1' }}
              rows={6}
            />
          ) : (
            <input
              type="text"
              value={tempContent[id] || value}
              onChange={(e) => onTempContentChange(id, e.target.value)}
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-purple-400"
              style={{ borderColor: '#E2A9F1' }}
            />
          )}
          <div className="flex gap-2">
            <button
              onClick={() => onSaveEdit(id)}
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Save size={16} /> Save
            </button>
            <button
              onClick={() => onCancelEdit(id)}
              className="flex items-center gap-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={className}>{value}</div>
          {isLoggedIn && (
            <button
              onClick={() => onStartEdit(id)}
              className="absolute -right-2 -top-2 p-2 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#E2A9F1' }}
            >
              <Edit2 size={16} />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default EditableBlock;