import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
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

export const LinkWrapper = styled.li`
  margin: 0.25rem 0;
`;

export const StyledLink = styled(Link)`
  color: #000000;
  font-size: 1.25rem;
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Grid>
    <Row>
      <Layout>
        <section>
          <Helmet title={`Tags | ${title}`} />
          <div>
            <div>
              <div>
                <Title>Tags</Title>
                <ul>
                  {group.map((tag) => (
                    <LinkWrapper key={tag.fieldValue}>
                      <StyledLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                      </StyledLink>
                    </LinkWrapper>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Row>
  </Grid>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
