import React from "react";
import { Header, Footer, PageHeader } from "../../components/user";

const GalleryDetailsScreen = (props) => {
  const { state } = props.location;
  return (
    <div>
      <Header />
      <PageHeader title={state.title} />
      <div className="pageBody_80">
        <div className="gallery_details_container">
          <div className="gallery_details_left">
            <img src={state.image} alt="painting" />
          </div>
          <div className="gallery_details_right">
            <p className="gallery_details_title">{state.title}</p>
            <p className="gallery_details_desc">{state.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryDetailsScreen;
