import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const BlogContainer = styled.header`
  position: relative;
  text-align: center;
`;

export const BlogMeta = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const BlogPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  background-color: #d8d8d8;

  &:hover {
    &::before {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      transform: rotate(2deg) scale(1.01);
    }
  }

  &::before {
    content: " ";
    display: block;
    background-color: #d8d8d8;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    transform: rotate(-2deg);
    box-shadow: -1px 1px 24px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="is-parent column is-6" key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <BlogPostWrapper>
                        <BlogContainer>
                          <Link to={post.fields.slug}>
                            {post.frontmatter.featuredimage ? (
                              <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                />
                                <BlogMeta>
                                  <span>{post.frontmatter.title}</span>
                                  <span> | </span>
                                  <span>{post.frontmatter.date}</span>
                                </BlogMeta>
                              </div>
                            ) : null}
                          </Link>
                        </BlogContainer>
                      </BlogPostWrapper>
                    </article>
                    <br />
                    <br />
                    <br />
                  </div>
                ))}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
