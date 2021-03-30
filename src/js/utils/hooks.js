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
