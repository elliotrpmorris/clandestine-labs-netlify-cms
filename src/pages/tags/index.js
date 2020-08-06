import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { Grid, Row } from "react-styled-flexboxgrid";

export const Title = styled.h1`
  color: #20232a;
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  margin-bottom: 0;
  @media (min-width: 414px) {
    font-size: 4rem;
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
  <Layout>
    <section id="page-wrap">
      <Grid>
        <Row>
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
        </Row>
      </Grid>
    </section>
  </Layout>
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
