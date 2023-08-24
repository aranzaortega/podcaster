export const formatTitle = (originalTitle) => {
  if (originalTitle.length > 50) {
    return `${originalTitle.substring(0, 50)}...`;
  }
  return originalTitle;
}