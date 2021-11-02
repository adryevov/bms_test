import React from "react";

const PinkLinkIconButton = (props) =>
{
  return (
    <a className="button-pink" href={ props.link } target={ props.blank ? "_blank" : "_self" } rel="noreferrer" style={{ width: "298px" }}>
      { props.name }
      <img src={ process.env.PUBLIC_URL + "/img/icons/icon-link-click.svg" } alt="Link Click" className="icon-link-click" />
    </a>
  );
};

export default React.memo(PinkLinkIconButton);
