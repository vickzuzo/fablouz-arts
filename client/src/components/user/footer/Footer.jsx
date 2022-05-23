import React from "react";
import Icon from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { whatsapp } from "react-icons-kit/fa/whatsapp";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer_container">
      <div className="pageBody_80">
        <div className="footer_content_container">
          <div className="footer_col_container">
            <p>Logo</p>
          </div>
          <div className="footer_col_container">
            <p className="title">NAVIGATION</p>
            <p className="link">Home</p>
            <p className="link">Biography</p>
            <p className="link">Gallery</p>
            <p className="link">NFTs</p>
            <p className="link">Contact Me</p>
            <p className="link">Shop</p>
          </div>
          <div className="footer_col_container">
            <p className="title">SERVICES</p>
            <p className="link">Paintings</p>
            <p className="link">Drawing</p>
            <p className="link">Wall Paper</p>
            <p className="link">Picture Frame</p>
          </div>
          <div className="footer_col_container">
            <p className="title">SOCIAL MEDIA</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p className="link" style={{ marginRight: "10px" }}>
                <Icon icon={facebookSquare} size={30} />
              </p>
              <p className="link">
                <Icon icon={whatsapp} size={30} />
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom_container">
          <p className="developer_contact">
            Designed By <span>VZ DEV</span>
          </p>
          <p>&copy; {year} All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
