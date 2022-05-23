import React from "react";

const GalleryHome = () => {
  const images = [
    "https://karolbak.com/wp-content/uploads/2020/07/SEN-ANIO%C5%81A-V-90x902020-1-809x800.jpg",
    "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
    "https://karolbak.com/wp-content/uploads/2020/05/IMG_6416-801x800.jpg",
    "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
    "https://karolbak.com/wp-content/uploads/2020/05/IMG_6416-801x800.jpg",
  ];

  return (
    <div className="pageBody_80">
      <div className="gallery_home_container">
        <div className="gallery_home_item">
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="gallery"
          />
        </div>
        <div className="gallery_home_item">
          <div className="text">
            <p className="text_title">I AM ALWAYS INSPIRED</p>
            <p className="text_desc">
              This is only part of my work. The best is yet to come.
            </p>
            <button className="custom_button">VIEW GALLERY</button>
          </div>
        </div>
        <div className="gallery_home_item">
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="gallery"
          />
        </div>
        <div className="gallery_home_item">
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="gallery"
          />
        </div>
        <div className="gallery_home_item">
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="gallery"
          />
        </div>
        <div className="gallery_home_item">
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
