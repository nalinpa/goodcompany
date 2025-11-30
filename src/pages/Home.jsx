import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CTA from '../components/CTA';

const Home = () => {
  const defaultContent = {
    headline: "Where yoga meets good company.",
    subheading: "Unpretentious and inclusive yoga on the mat  and a social stretch after, if you’re keen.",
    vibe: "At Good Company Yoga, we believe the best part of yoga isn't how deep you stretch, it's sharing the space with good people. Our classes are relaxed, inclusive, and a little bit social. You'll move, breathe, and slow down — then stick around for a chat, a coffee, or sometimes even a wine. No matching sets, no pressure, no pretence — just yoga that feels good and company that feels even better.",
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <>
      <Hero 
        content={content} 
        scrollToSection={scrollToSection}
        editableProps={editableProps}
      />

      <AboutSection
        content={content}
        editableProps={editableProps}
      />

      <CTA />
    </>
  );
};

export default Home;