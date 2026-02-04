import React, { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import Lightbox from '../components/Lightbox';
import '../styles/Gallery.css';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const galleryItems = [
    {
      image: '/assets/images/shopbop-team.png',
      title: 'Amazon Shopbop Capstone',
      description: 'Leading cross-functional teams to enhance customer experience for digital retail',
      tag: 'Product Management'
    },
    {
      image: '/assets/images/pacific-coast.jpg',
      title: 'Pacific Coast Highway',
      description: 'Exploring Big Sur - nothing beats ocean views and open roads',
      tag: 'Travel'
    },
    {
      image: '/assets/images/niagara.jpg',
      title: 'Niagara Falls',
      description: 'Getting completely soaked and loving every minute of it',
      tag: 'Adventure'
    },
    {
      image: '/assets/images/starry-night.jpg',
      title: 'Art & Creativity',
      description: 'Finished this Starry Night diamond painting - patience tested and rewarded',
      tag: 'Hobbies'
    },
    {
      image: '/assets/images/mba-friends.jpg',
      title: 'MBA Squad',
      description: 'My Wisconsin crew - business school is better with the right people',
      tag: 'Community'
    },
    {
      image: '/assets/images/brewers-game.jpg',
      title: 'Brewers Game',
      description: 'Milwaukee Brewers at American Family Field - first baseball game experience!',
      tag: 'Sports'
    },
    {
      image: '/assets/images/tailgate.jpg',
      title: 'Gameday Tailgate',
      description: 'Learning the art of Wisconsin tailgating - burgers, friends, and college football',
      tag: 'Campus Life'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Beyond Work</h2>
          <p className="section-intro">
            When I'm not building products, you'll find me exploring new places, trying 
            creative projects, or enjoying time with friends. Here are some moments that matter.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              {...item}
              onClick={() => openLightbox(item.image)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={currentImage}
        onClose={closeLightbox}
      />
    </div>
  );
}

export default Gallery;
