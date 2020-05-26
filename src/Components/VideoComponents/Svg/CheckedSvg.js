import React, { memo } from "react";
import "./sass/svg_style_scvi.scss";

// SVG path COPIED FROM YOUTUBE

const CheckedSvg = () => {
  return (
    <div className="ytb_svg_x">
      <svg className="ytb_svg_x__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#3ea6ff"
            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(CheckedSvg);
