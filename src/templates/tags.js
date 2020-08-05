import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
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

export const StyledLink = styled(Link)`
  margin: 0 0.25rem;
  color: #000000;
`;

export const Tags = styled.ul`
  list-style: none;
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <StyledLink to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </StyledLink>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Grid>
        <Row>
          <Layout>
            <section>
              <Helmet title={`${tag} | ${title}`} />
              <div>
                <div className="columns">
                  <div
                    className="column is-10 is-offset-1"
                    style={{ marginBottom: "6rem" }}
                  >
                    <Title>{tagHeader}</Title>
                    <Tags>{postLinks}</Tags>
                    <p>
                      <StyledLink to="/tags/">Browse all tags</StyledLink>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </Row>
      </Grid>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
