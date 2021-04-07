import React from "react";

const GrayDownloadIconButton = (props) =>
{
  return (
    <a className="gray-download-icon-button" href={ props.link } target={ props.blank ? "_blank" : "_self" } rel="noreferrer">
      { props.name }
      <img src={ process.env.PUBLIC_URL + "/img/icons/icon-download.svg" } alt="Download" />
    </a>
  );
};

export default React.memo(GrayDownloadIconButton);
