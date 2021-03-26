import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () =>
{
  const [ isActive, setIsActive ] = useState(false);

  const makeScroll = () =>
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const listenScrollEvent = useCallback(() =>
  {
    if (window.pageYOffset > window.innerHeight && !isActive)
    {
      setIsActive(!isActive);
    }
    else if (isActive && window.innerHeight > window.pageYOffset)
    {
      setIsActive(false);
    }
  }, [ isActive ]);

  useEffect(() =>
  {
    window.addEventListener('scroll', listenScrollEvent);
    window.addEventListener('resize', listenScrollEvent);

    return () =>
    {
      window.removeEventListener('scroll', listenScrollEvent);
      window.removeEventListener('resize', listenScrollEvent);
    };
  }, [ listenScrollEvent ]);

  if (!isActive) return null;

  return <Link to="#" onClick={ makeScroll } className="scroll-button"><FontAwesomeIcon icon={ faChevronUp } /> <span>Top</span></Link>;
};

export default React.memo(ScrollToTopButton);
