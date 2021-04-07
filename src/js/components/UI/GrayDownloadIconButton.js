import React from "react";

const GrayDownloadIconButton = (props) =>
{
  return (
    <a className={ "gray-download-icon-button" + (props.className ? (" " + props.className) : "") } href={ props.link } target={ props.blank ? "_blank" : "_self" } rel="noreferrer" onClick={ props.onClick }>
      { props.name }
      <img src={ process.env.PUBLIC_URL + "/img/icons/icon-download.svg" } alt="Download" />
    </a>
  );
};

export default React.memo(GrayDownloadIconButton);
