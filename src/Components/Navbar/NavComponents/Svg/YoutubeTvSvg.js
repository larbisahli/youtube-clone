import React, { memo } from "react";
import "./sass/svg_style_scnni.scss";

// SVG paths COPIED FROM YOUTUBE

const YouTubeTvSvg = () => {
  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#F00"
            d="M23.8,17.1c0,0.9-0.7,1.6-1.6,1.6H1.9c-0.9,0-1.6-0.7-1.6-1.6V4.8c0-0.9,0.7-1.6,1.6-1.6 h20.3c0.9,0,1.6,0.7,1.6,1.6V17.1z"
          ></path>
          <path
            d="M17.3,20.8H6.7c-0.3,0-0.5-0.2-0.5-0.5v0c0-0.3,0.2-0.5,0.5-0.5h10.7 c0.3,0,0.5,0.2,0.5,0.5v0C17.9,20.6,17.6,20.8,17.3,20.8z"
            fill="#F00"
          ></path>
          <polygon fill="#FFFFFF" points="9.6,14.4 15.7,10.9 9.6,7.5"></polygon>
        </g>
      </svg>
    </div>
  );
};

export default memo(YouTubeTvSvg);
