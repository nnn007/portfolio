import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head, Breadcrumb } from '@components';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostTemplate = ({ data, location }) => {
  if (!data?.markdownRemark) {
    return (
      <Layout location={location}>
        <div>Post not found</div>
      </Layout>
    );
  }

  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags, description } = frontmatter;

  return (
    <Layout location={location}>
      <Head
        title={title}
        description={description}
        article={true}
        canonical={`https://nnn007.github.io${frontmatter.slug}`}
      />

      <StyledPostContainer>
        <Breadcrumb
          items={[
            { label: 'Home', url: '/' },
            { label: 'Blog', url: '/pensieve' },
            { label: title },
          ]}
        />

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/pensieve/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>

      {/* Structured Data for Blog Post */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: description,
          author: {
            '@type': 'Person',
            name: 'Nilesh Nayan',
            url: 'https://nnn007.github.io',
          },
          publisher: {
            '@type': 'Person',
            name: 'Nilesh Nayan',
            url: 'https://nnn007.github.io',
          },
          datePublished: date,
          dateModified: date,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://nnn007.github.io${frontmatter.slug}`,
          },
          url: `https://nnn007.github.io${frontmatter.slug}`,
          keywords: tags ? tags.join(', ') : '',
          articleSection: 'Blog',
          inLanguage: 'en-US',
        })}
      </script>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
