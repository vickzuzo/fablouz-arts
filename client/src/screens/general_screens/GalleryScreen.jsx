import React from "react";
import {
  Header,
  PageHeader,
  Footer,
  MasonryLayout,
} from "../../components/user";

const GalleryScreen = () => {
  const data = [
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      title: "THird Eye lady",
      description:
        "THi sis and image iof aibna third eye lady on her foreheade",
    },
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/IMG_6416-801x800.jpg",
      title: "Black angel",
      description: "A lady wit black winds make her appear as a black angel",
    },
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/PARCAE-80x110-onp-1110x800.jpg",
      title: "THree beauties",
      description: "THree ladies side together",
    },
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/07/SEN-ANIO%C5%81A-V-90x902020-1-809x800.jpg",
      title: "ice queen",
      description:
        "A lady appears to bein some sought of white custom makeing her look like a snow queen",
    },
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/PARCAE-80x110-onp-1110x800.jpg",
      title: "THree ladies",
      description: "THree ladies sitting together",
    },
    {
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      title: "lorem ipsunm title",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    },
  ];

  return (
    <div>
      <Header />
      <PageHeader title="My Gallery" />
      <div className="pageBody_80">
        {data && <MasonryLayout galleries={data} />}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryScreen;
