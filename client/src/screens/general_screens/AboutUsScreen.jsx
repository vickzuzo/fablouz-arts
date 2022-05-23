import React from "react";
import { Header, PageHeader, Footer } from "../../components/user";

const AboutUsScreen = () => {
  const image =
    "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg";
  return (
    <div>
      <Header />
      <PageHeader title="About Me" />
      <div className="pageBody_80">
        <div className="about_screen_container">
          <div className="about_screen_left">
            <h1>Welcome to my art collection and little museum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque
              reiciendis expedita nihil laudantium similique eveniet harum
              debitis accusamus enim aut quos nam id, excepturi totam dolor sunt
              repudiandae facilis. Eius mollitia libero veniam ad labore illum
              odit nemo corrupti dolore. Sint vel totam at vero, aspernatur
              temporibus quasi tempore cupiditate exercitationem reiciendis
              delectus sed animi, incidunt corrupti earum soluta. Optio
              praesentium temporibus magnam modi repellendus numquam quas.
              Dignissimos quasi impedit deserunt consequatur aut commodi modi
              quaerat ab eligendi voluptatem! Enim a suscipit explicabo, ducimus
              accusamus sapiente quaerat totam nihil! Beatae blanditiis eius
              aliquam molestiae culpa molestias nobis ex rem modi? A quis dicta
              natus inventore similique dolorem hic assumenda nemo, corrupti
              eveniet, cupiditate asperiores, maiores neque quibusdam ratione
              molestiae! Aliquid amet consectetur consequatur quia
              exercitationem possimus deleniti corrupti inventore deserunt aut
              architecto suscipit libero esse, officia delectus facilis, ullam
              tempore aperiam alias vel non repudiandae dolorem qui. Saepe,
              asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Qui eaque reiciendis expedita nihil laudantium similique
              eveniet harum debitis accusamus enim aut quos nam id, excepturi
              totam dolor sunt repudiandae facilis. Eius mollitia libero veniam
              ad labore illum odit nemo corrupti dolore. Sint vel totam at vero,
              aspernatur temporibus quasi tempore cupiditate exercitationem
              reiciendis delectus sed animi, incidunt corrupti earum soluta.
              Optio praesentium temporibus magnam modi repellendus numquam quas.
              Dignissimos quasi impedit deserunt consequatur aut commodi modi
              quaerat ab eligendi voluptatem! Enim a suscipit explicabo, ducimus
              accusamus sapiente quaerat totam nihil! Beatae blanditiis eius
              aliquam molestiae culpa molestias nobis ex rem modi? A quis dicta
              natus inventore similique dolorem hic assumenda nemo, corrupti
              eveniet, cupiditate asperiores, maiores neque quibusdam ratione
              molestiae! Aliquid amet consectetur consequatur quia
              exercitationem possimus deleniti corrupti inventore deserunt aut
              architecto suscipit libero esse, officia delectus facilis, ullam
              tempore aperiam alias vel non repudiandae dolorem qui. Saepe,
              asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Qui eaque reiciendis expedita nihil laudantium similique
              eveniet harum debitis accusamus enim aut quos nam id, excepturi
              totam dolor sunt repudiandae facilis. Eius mollitia libero veniam
              ad labore illum odit nemo corrupti dolore. Sint vel totam at vero,
              aspernatur temporibus quasi tempore cupiditate exercitationem
              reiciendis delectus sed animi, incidunt corrupti earum soluta.
              Optio praesentium temporibus magnam modi repellendus numquam quas.
              Dignissimos quasi impedit deserunt consequatur aut commodi modi
              quaerat ab eligendi voluptatem! Enim a suscipit explicabo, ducimus
              accusamus sapiente quaerat totam nihil! Beatae blanditiis eius
              aliquam molestiae culpa molestias nobis ex rem modi? A quis dicta
              natus inventore similique dolorem hic assumenda nemo, corrupti
              eveniet, cupiditate asperiores, maiores neque quibusdam ratione
              molestiae! Aliquid amet consectetur consequatur quia
              exercitationem possimus deleniti corrupti inventore deserunt aut
              architecto suscipit libero esse, officia delectus facilis, ullam
              tempore aperiam alias vel non repudiandae dolorem qui. Saepe,
              asperiores?
            </p>
          </div>
          <div className="about_screen_right">
            <img src={image} alt="fabloz arts" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsScreen;
