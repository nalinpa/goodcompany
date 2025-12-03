import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  priority = false
}) => {
  // Remove file extension and add .webp
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fallbackSrc = src;

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for older browsers */}
      <img 
        src={fallbackSrc}
        alt={alt}
        className={className}  // This will include object-cover from parent
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={(e) => {
          // Fallback if WebP fails
          e.target.src = fallbackSrc;
        }}
      />
    </picture>
  );
};

export default OptimizedImage;