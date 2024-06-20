"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import './styles.css';
declare global {
    interface Window {
      openFullImg: (img_src: string) => void;
      closeFullImg: () => void;
    }
  }

const Gallery = () => {
  useEffect(() => {
    const fullImgBox = document.getElementById('fullImgBox') as HTMLDivElement;
    const fullImg = document.getElementById('fullImg') as HTMLImageElement;

    const openFullImg = (img_src: string) => {
      fullImg.src = img_src;
      fullImgBox.style.display = 'flex';
    };

    const closeFullImg = () => {
      fullImgBox.style.display = 'none';
    };

    window.openFullImg = openFullImg;
    window.closeFullImg = closeFullImg;
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link id="theme-link" rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="full-img" id="fullImgBox">
        <img src="files/paramount.jpg" id="fullImg" />
        <span onClick={() => window.closeFullImg()}>x</span>
      </div>
      <div className="container">
        <div className="heading">
          <h3>
            Photo <span>Gallery</span>
          </h3>
        </div>
        <div className="box">
          <div className="dream">
            <img src="files/beach.jpg" onClick={() => window.openFullImg('files/beach.jpg')} />
            <img src="files/bird.jpg" onClick={() => window.openFullImg('files/bird.jpg')} />
            <img src="files/boat_parts.jpg" onClick={() => window.openFullImg('files/boat_parts.jpg')} />
            <img src="files/fire.jpg" onClick={() => window.openFullImg('files/fire.jpg')} />
            <img src="files/lamps.jpg" onClick={() => window.openFullImg('files/lamps.jpg')} />
            <img src="files/leaves.jpg" onClick={() => window.openFullImg('files/leaves.jpg')} />
            <img src="files/mountain.jpg" onClick={() => window.openFullImg('files/mountain.jpg')} />
            <img src="files/tree_moon.jpg" onClick={() => window.openFullImg('files/tree_moon.jpg')} />
            <img src="files/paramount.jpg" onClick={() => window.openFullImg('files/paramount.jpg')} />
            <img src="files/greece_sky.jpg" onClick={() => window.openFullImg('files/greece_sky.jpg')} />
          </div>
          <div className="dream">
            <img src="files/fire_2.jpg" onClick={() => window.openFullImg('files/fire_2.jpg')} />
            <img src="files/mosque.jpg" onClick={() => window.openFullImg('files/mosque.jpg')} />
            <img src="files/monkey.jpg" onClick={() => window.openFullImg('files/monkey.jpg')} />
            <img src="files/mountain_3.jpg" onClick={() => window.openFullImg('files/mountain_3.jpg')} />
            <img src="files/radio.jpg" onClick={() => window.openFullImg('files/radio.jpg')} />
            <img src="files/random_face.jpg" onClick={() => window.openFullImg('files/random_face.jpg')} />
            <img src="files/sky_tree.jpg" onClick={() => window.openFullImg('files/sky_tree.jpg')} />
            <img src="files/squirrel.jpg" onClick={() => window.openFullImg('files/squirrel.jpg')} />
            <img src="files/lampost.jpg" onClick={() => window.openFullImg('files/lampost.jpg')} />
            <img src="files/half_lotus.jpg" onClick={() => window.openFullImg('files/half_lotus.jpg')} />
            <img src="files/lake.jpg" onClick={() => window.openFullImg('files/lake.jpg')} />
          </div>
          <div className="dream">
            <img src="files/mountain_2.jpg" onClick={() => window.openFullImg('files/mountain_2.jpg')} />
            <img src="files/mountain_4.jpg" onClick={() => window.openFullImg('files/mountain_4.jpg')} />
            <img src="files/india.jpg" onClick={() => window.openFullImg('files/india.jpg')} />
            <img src="files/sun_goa.jpg" onClick={() => window.openFullImg('files/sun_goa.jpg')} />
            <img src="files/tree_mount.jpg" onClick={() => window.openFullImg('files/tree_mount.jpg')} />
            <img src="files/tree_waterfall.jpg" onClick={() => window.openFullImg('files/tree_waterfall.jpg')} />
            <img src="files/tree.jpg" onClick={() => window.openFullImg('files/tree.jpg')} />
            <img src="files/waterfall.jpg" onClick={() => window.openFullImg('files/waterfall.jpg')} />
            <img src="files/school.jpg" onClick={() => window.openFullImg('files/school.jpg')} />
            <img src="files/lights.jpg" onClick={() => window.openFullImg('files/lights.jpg')} />
            <img src="files/greece.jpg" onClick={() => window.openFullImg('files/greece.jpg')} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
