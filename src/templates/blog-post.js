import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import { Grid, Row } from "react-styled-flexboxgrid";

export const Title = styled.h1`
  color: #323741;
  text-align: left;
  margin: 0;
  font-size: 2.5rem;

  @media (min-width: 360px) {
    font-size: 3rem;
  }
  @media (min-width: 415px) {
    font-size: 3.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const BlogPostWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  padding: 2.5rem;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 5rem;
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

export const Tags = styled.ul`
  display: flex;
  list-style: none;
`;

export const Tag = styled(Link)`
  margin: 0 0.25rem;
  color: #000000;
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Grid>
      <Row>
        {helmet || ""}
        <BlogPostWrapper>
          <div>
            <Title>{title}</Title>
            <p>{description}</p>
            <PostContent className={"post"} content={content} />
            {tags && tags.length ? (
              <div>
                <h4>View related posts:</h4>
                <Tags>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Tag to={`/tags/${kebabCase(tag)}/`}>{tag}</Tag>
                    </li>
                  ))}
                </Tags>
              </div>
            ) : null}
          </div>
        </BlogPostWrapper>
      </Row>
      <br />
    </Grid>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
