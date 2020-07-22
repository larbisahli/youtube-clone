import React, { memo } from "react";
import "./scss/svg_style_scnni.scss";

// SVG path COPIED FROM YOUTUBE

const ReSearchSvg = ({ Theme }) => {
  return (
    <div className="ytb_svg titleS">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={Theme ? "#fff" : "#606060"}
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(ReSearchSvg);