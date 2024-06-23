import React, { useState } from 'react';
import './styles_gallery.css';

const images = [
  'files/beach.jpg', 'files/bird.jpg', 'files/boat_parts.jpg', 'files/mosque.jpg', 'files/fire.jpg',
  'files/lamps.jpg', 'files/leaves.jpg', 'files/mountain.jpg', 'files/tree_moon.jpg',
  'files/paramount.jpg', 'files/school.jpg','files/monkey.jpg', 'files/mountain_3.jpg', 
  'files/radio.jpg', 'files/random_face.jpg',
  'files/sky_tree.jpg', 'files/squirrel.jpg', 'files/lampost.jpg', 'files/half_lotus.jpg',
  'files/lake.jpg', 'files/mountain_2.jpg', 'files/mountain_4.jpg', 'files/greece_sky.JPG',
  'files/sun_goa.jpg', 'files/tree_mount.jpg', 'files/tree_waterfall.jpg', 'files/tree.jpg',
  'files/waterfall.jpg', 'files/lights.jpg', 'files/greece.jpg', 'files/fire_2.jpg',
];


const Gallery: React.FC = () => {
  const [fullImgSrc, setFullImgSrc] = useState('');
  const [isFullImgOpen, setIsFullImgOpen] = useState(false);

  const openFullImg = (src: string) => {
    setFullImgSrc(src);
    setIsFullImgOpen(true);
  };

  const closeFullImg = () => {
    setIsFullImgOpen(false);
  };

  const imagesPerColumn = Math.ceil(images.length / 3); // Calculate number of images per column
  const columns = Array.from({ length: 3 }, (_, columnIndex) => (
    <div className="dream" key={columnIndex}>
      {images.slice(columnIndex * imagesPerColumn, (columnIndex + 1) * imagesPerColumn).map((src, index) => (
        <img
          key={index}
          src={src}
          onClick={() => openFullImg(src)}
          alt="Gallery item"
        />
      ))}
    </div>
  ));

  return (
    <div className='container'>
      {isFullImgOpen && (
        <div className="fullImg" id="fullImgBox">
          <img src={fullImgSrc} id="fullImg" alt="Full view" />
          <span onClick={closeFullImg}>x</span>
        </div>
      )}
        <div className="box">
          {columns}
        </div>
    </div>
  );
};

export default Gallery;
