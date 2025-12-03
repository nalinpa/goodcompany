import React, { useState, useEffect } from 'react';
import ClassesSection from '../components/sections/ClassesSection';
import PricingSection from '../components/sections/PricingSection';

const Classes = () => {
  const defaultContent = {
    timetable: "Monday 7:00am - Morning Reset\nWednesday 6:30pm - Stretch & Restore\nSaturday 9:00am - Yin & Yarn\n\nMats available. Come as you are.",
    pricing: "Casual class — $15\n5-Class Pass — $60"
  };

  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('goodCompanyYogaContent');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const [tempContent, setTempContent] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('goodCompanyYogaContent', JSON.stringify(content));
  }, [content]);

  const startEdit = (id) => {
    setEditingId(id);
    setTempContent({ ...tempContent, [id]: content[id] });
  };

  const cancelEdit = (id) => {
    setEditingId(null);
    setTempContent({ ...tempContent, [id]: content[id] });
  };

  const saveEdit = (id) => {
    setContent({ ...content, [id]: tempContent[id] });
    setEditingId(null);
  };

  const handleTempContentChange = (id, value) => {
    setTempContent({ ...tempContent, [id]: value });
  };

  const editableProps = {
    isLoggedIn,
    editingId,
    tempContent,
    onStartEdit: startEdit,
    onCancelEdit: cancelEdit,
    onSaveEdit: saveEdit,
    onTempContentChange: handleTempContentChange
  };

  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#FFF8F3', minHeight: '100vh' }}>
      {/* Hero Section */}
       <div className="pt-32 pb-20" style={{ 
        background: 'linear-gradient(135deg, #6A3A78 0%, #E2A9F1 100%)'
      }}>
        <div className="max-w-4xl mx-auto   px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Courier Prime, monospace' }}>
            Classes & Pricing
          </h1>
          <p className="text-2xl text-white/90">
            Your weekly Good Company
          </p>
        </div>
      </div>

      <ClassesSection />

      <PricingSection
        content={content}
        editableProps={editableProps}
      />

    </div>
  );
};

export default Classes;