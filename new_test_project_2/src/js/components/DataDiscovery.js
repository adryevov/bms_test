import React from "react";

const DataDiscovery = () =>
  <div className="playcanvaswrap">
    <iframe
      title="Data Discovery"
      className="playcanvasfull"
      src="https://bms-brick-builder-2021.vercel.app/river/index.html"
      width="100%"
      height="100%"
      scrolling="auto"
    >
    </iframe >
  </div>
;

export default React.memo(DataDiscovery);
