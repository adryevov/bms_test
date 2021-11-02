import React from "react";

const BrickBuilder = () =>
  <div className="playcanvaswrap">
    <iframe
      title="BrickBuilder"
      className="playcanvasfull"
      src="https://bms-brick-builder-2021.vercel.app/io/index.html"
      width="100%"
      height="100%"
      scrolling="auto"
    >
    </iframe>
  </div>
;

export default React.memo(BrickBuilder);
