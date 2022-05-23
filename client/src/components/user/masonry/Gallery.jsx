import React from "react";

const Gallery = ({ gallery, key }) => {
  return (
    <div key={key}>
      <img src={gallery.image} alt="painting" />
      <div className="gallery_item_bottom">
        <p className="gallery_item_bottom_title">{gallery.title}</p>
        <p className="gallery_item_bottom_desc">{gallery.description}</p>
      </div>
    </div>
  );
};

export default Gallery;
