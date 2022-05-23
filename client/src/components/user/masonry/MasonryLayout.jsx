import React from "react";
import Masonry from "react-masonry-css";
import { History } from "../../../routers/AppRouter";
import Gallery from "./Gallery";

const MasonryLayout = ({ galleries }) => {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 3,
    1200: 3,
    1000: 2,
    500: 1,
  };

  return (
    <Masonry
      className="masonry_container"
      breakpointCols={breakpointColumnsObj}
    >
      {galleries?.map((gallery) => (
        <div
          className="gallery_item_container"
          onClick={() =>
            History.push({
              pathname: `/gallery-details/${gallery.title}`,
              state: gallery,
            })
          }
        >
          <Gallery key={gallery._id} gallery={gallery} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
