import React from "react";

const SectionHeader = (props) => {
  return (
    <div>
      <div className="section_header_container" style={props.style}>
        <div className="section_header_line" />
        <div className="section_header_text_holder">
          <h1>{props.title}</h1>
          {props.subtitle && <p>{props.subtitle}</p>}
        </div>
        <div className="section_header_line" />
      </div>
    </div>
  );
};

export default SectionHeader;
