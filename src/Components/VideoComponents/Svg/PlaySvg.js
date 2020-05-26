import React, { memo } from "react";
import "./sass/svg_style_scvi.scss";

// SVG path COPIED FROM YOUTUBE

const PlaySvg = () => {
  return (
    <div className="ytb_svg_x">
      <svg className="ytb_svg_x__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path fill="#fff" d="M8 5v14l11-7z"></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(PlaySvg);
