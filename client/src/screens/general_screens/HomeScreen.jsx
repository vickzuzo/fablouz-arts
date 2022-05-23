import React from "react";
import {
  Header,
  Carousel,
  AboutHome,
  GalleryHome,
  ServicesHome,
  Footer,
} from "../../components/user";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <AboutHome />
      <GalleryHome />
      <ServicesHome />
      <Footer />
    </div>
  );
};

export default HomeScreen;
