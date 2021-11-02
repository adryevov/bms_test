import { useEffect, useState } from "react";

export const useMetaInfo = () =>
{
  const updateMetaTitle = (title) => document.title = title + " - AACR";

  const updateMetaDescription = (description) =>
    document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute('content', description)
  ;

  return { updateMetaTitle, updateMetaDescription };
};

export const useIsMobile = () =>
{
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    // Calling the function on initial render
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
