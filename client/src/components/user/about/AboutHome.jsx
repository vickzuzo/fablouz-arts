import React from "react";
import Icon from "react-icons-kit";

import { ic_east } from "react-icons-kit/md/ic_east";

const AboutHome = () => {
  const image =
    "https://karolbak.com/wp-content/uploads/2020/07/SEN-ANIO%C5%81A-V-90x902020-1-809x800.jpg";

  return (
    <div className="pageBody_80">
      <div className="about_home_container">
        <div className="about_home_content">
          <h1 className="about_home_title">
            Welcome to my art collection and little museum.
          </h1>
          <p className="about_home_desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            asperiores sunt minus doloremque, ducimus fugit explicabo,
            architecto dolorum obcaecati doloribus iste pariatur modi maxime
            quaerat eum rem, animi porro. Veniam? Eum cupiditate ipsa vero illo
            provident dolorem perspiciatis minima, sunt laboriosam sint placeat,
            expedita tempora asperiores, eveniet eaque? Sed quo nulla autem
            deleniti voluptatum nobis blanditiis sapiente inventore quasi
            expedita? Doloribus quibusdam vel animi autem placeat! Dicta illo,
            natus inventore corporis voluptatibus temporibus. Quod earum, velit
            doloribus repudiandae quo placeat, temporibus aspernatur quas ipsam
            sint provident laborum, quidem repellendus delectus.
          </p>
          <p>
            Read More <Icon icon={ic_east} size={20} />
          </p>
        </div>
        <div className="about_image_container">
          <img src={image} alt="Fabloz Arts" />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
