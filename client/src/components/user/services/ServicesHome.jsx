import React from "react";
import Icon from "react-icons-kit";
import { ic_east } from "react-icons-kit/md/ic_east";

const ServicesHome = () => {
  const services = [
    {
      title: "Painting",
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit some description test here.",
    },
    {
      title: "Painting",
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit some description test here.",
    },
    {
      title: "Painting",
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit some description test here.",
    },
    {
      title: "Painting",
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit some description test here.",
    },
  ];

  return (
    <div className="pageBody_80">
      <div className="service_home_container">
        {services.map((service, index) => (
          <div className="service_home_item" key={index}>
            <div className="service_home_item_left">
              <img src={service.image} alt="service" />
              <p>{service.title}</p>
            </div>
            <Icon icon={ic_east} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
