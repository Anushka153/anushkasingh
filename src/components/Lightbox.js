import React from 'react';

function Lightbox({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <span className="lightbox-close">&times;</span>
      <img src={imageSrc} alt="Gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Lightbox;
