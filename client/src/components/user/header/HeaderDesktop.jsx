import React, { useState, useEffect } from "react";
import { History } from "../../../routers/AppRouter";

const HeaderDesktop = (props) => {
  const { setSiteTheme, siteTheme, space } = props;
  const logo = "https://karolbak.com/wp-content/uploads/2020/05/logo_www.png";

  const [headerChange, setHeaderChange] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setHeaderChange(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <div
            className={
              headerChange !== false
                ? "header_desktop header_desktop_change"
                : "header_desktop"
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                onClick={() => History.push("/")}
                style={{ cursor: "pointer" }}
                className="logo"
              >
                <img
                  src={logo}
                  className="logo_img"
                  alt="princessMel Importation Services Logo"
                />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/")}
                >
                  <p>Home</p>
                </div>

                <div
                  className="header_icon__container"
                  onClick={() => History.push("/biography")}
                >
                  <p>Biography</p>
                </div>

                <div
                  className="header_icon__container"
                  onClick={() => History.push("/gallery")}
                >
                  <p>Gallery</p>
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/nft")}
                >
                  <p>NFTs</p>
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/contact-me")}
                >
                  <p>Contact Me</p>
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/shop")}
                >
                  <p>Shop</p>
                </div>
              </div>
              {/* <Toggle
                checked={siteTheme}
                onChange={setSiteTheme}
                aria_label={siteTheme === true ? "Dark mode" : "Light mode"}
              /> */}
            </div>
          </div>
        </div>
        {space && (
          <div style={{ height: "60px" }} className="hide_on_mobile"></div>
        )}
      </div>
    </div>
  );
};

export default HeaderDesktop;
