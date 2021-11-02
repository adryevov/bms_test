import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TransparentFooter from "./TransparentFooter";
import { useIsMobile } from "../../utils/hooks";

const ISIPopup = ({ isPopupSticky = false, children }) =>
{
  const isMobile = useIsMobile();
  const [ isPopupToggled, setIsPopupToggled ] = useState(true);

  useEffect(() =>
  {
    return () => document.body.style.overflow = "auto";
  }, []);

  useEffect(() => setIsPopupToggled(isMobile), [ isMobile ]);

  useEffect(() =>
  {
    if (isPopupToggled)
    {
      document.body.style.overflow = "auto";
    }
    else
    {
      document.body.style.overflow = "hidden";
    }
  }, [ isPopupToggled ]);

  return (
    <section className={ "isi-popup-content" + (isPopupToggled ? " isi-popup-toggled" : "") + (isPopupSticky && isPopupToggled ? " isi-popup-sticky" : "") }>
      <Container>
        { !isPopupSticky && <span className="isi-popup-toggle-btn" onClick={ () => setIsPopupToggled(isPopupToggled => !isPopupToggled) }></span> }
        { children }
      </Container>

      <TransparentFooter />
    </section>
  );
};

export default React.memo(ISIPopup);
