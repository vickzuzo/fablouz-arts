import React from "react";
import { Footer, Header, PageHeader } from "../../components/user";

const ContactUsScreen = () => {
  return (
    <div>
      <Header />
      <PageHeader title="Contact Me" />
      <div className="pageBody_80">
        <div className="contact_container">
          <div className="input_flex">
            <div className="input_container">
              <input />
              <span>input title</span>
            </div>
            <div className="input_container">
              <input />
              <span>input title</span>
            </div>
          </div>
          <div className="input_container">
            <input />
            <span>input title</span>
          </div>
          <div className="input_container">
            <input />
            <span>input title</span>
          </div>
          <div className="input_container">
            <button className="input_button">SUBMIT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsScreen;
