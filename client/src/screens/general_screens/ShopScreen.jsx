import React from "react";
import { Header, PageHeader, Footer } from "../../components/user";

const ShopScreen = () => {
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
      <PageHeader title="Antiques Shop" />
      <div className="pageBody_80">
        <div className="shop_container">
          {data.map((gallery, index) => (
            <div className="shop_item_container" key={index}>
              <img src={gallery.image} alt="antique" />
              <div className="shop_item_details_container">
                <p className="shop_item_title">{gallery.title}</p>
                <div className="shop_item_others_container">
                  <p>Available</p>
                  <p>Price</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopScreen;
