import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

export const BlogImage = styled(Img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return <BlogImage fluid={image.childImageSharp.fluid} alt={alt} />;
  }

  if (!!childImageSharp) {
    return <BlogImage fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <BlogImage src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImage;
