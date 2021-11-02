import React from "react";

const IoPotential = () =>
  <div className="playcanvaswrap">
    <iframe
      title="IoPotential"
      className="playcanvasfull"
      src="https://bms-brick-builder-2021.vercel.app/touchpuck/index.html"
      width="100%"
      height="100%"
      scrolling="auto"
    >
    </iframe>
  </div>
;

export default React.memo(IoPotential);
