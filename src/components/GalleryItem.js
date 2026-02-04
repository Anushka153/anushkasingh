import React from 'react';

function GalleryItem({ image, title, description, tag, onClick }) {
  return (
    <div className="gallery-item" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="gallery-caption">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="gallery-tag">{tag}</span>
      </div>
    </div>
  );
}

export default GalleryItem;
