// Create a meta image path for SEO
// Handles Gatsby image objects, relative paths, and absolute URLs
function createMetaImagePath(image, siteUrl) {
  if (!image) {
    return siteUrl + '/images/social-preview.jpg';
  }

  // If image is a Gatsby image object with childImageSharp
  if (image && image.childImageSharp && image.childImageSharp.fixed) {
    return siteUrl + image.childImageSharp.fixed.src;
  }

  if (image && image.childImageSharp && image.childImageSharp.fluid) {
    return siteUrl + image.childImageSharp.fluid.src;
  }

  // If image is a Gatsby image object with gatsbyImageData
  if (image && image.childImageSharp && image.childImageSharp.gatsbyImageData) {
    const imageData = image.childImageSharp.gatsbyImageData;
    if (imageData.images && imageData.images.fallback && imageData.images.fallback.src) {
      return siteUrl + imageData.images.fallback.src;
    }
  }

  // If image is a plain object with a publicURL (Gatsby file node)
  if (image && image.publicURL) {
    return siteUrl + image.publicURL;
  }

  // If image is a string
  if (typeof image === 'string') {
    // Already an absolute URL
    if (image.startsWith('http://') || image.startsWith('https://')) {
      return image;
    }
    // Relative path — prepend siteUrl
    return siteUrl + image;
  }

  return siteUrl + '/images/social-preview.jpg';
}

export default createMetaImagePath;
