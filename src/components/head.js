import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image, article, canonical }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
            author
            keywords
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    author,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: canonical || `${siteUrl}${pathname}`,
    author: author,
    keywords: keywords,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      {/* Basic Meta Tags */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={twitterUsername} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a192f" />
      <meta name="msapplication-TileColor" content="#0a192f" />

      {/* Google Site Verification */}
      <meta name="google-site-verification" content="LP6fEXDXd2VjCsFwVhUQ6UcSjRSbjW9m5sWwDjEL0ZE" />

      {/* Structured Data - Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nilesh Nayan",
          "alternateName": "nnn007",
          "url": "https://nnn007.github.io",
          "image": `${siteUrl}${defaultImage}`,
          "sameAs": [
            "https://github.com/nnn007",
            "https://twitter.com/nayannilesh",
            "https://www.linkedin.com/in/nilesh-nayan",
            "https://www.instagram.com/42._me"
          ],
          "jobTitle": "Software Engineer & AI Specialist",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-employed"
          },
          "description": "Nilesh Nayan is a software engineer and AI specialist specializing in software development, machine learning, and artificial intelligence.",
          "knowsAbout": [
            "Software Development",
            "Machine Learning",
            "Artificial Intelligence",
            "Web Development",
            "React",
            "JavaScript",
            "Python"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Software Engineering"
          }
        })}
      </script>

      {/* Structured Data - Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Nilesh Nayan Portfolio",
          "alternateName": "Nilesh Nayan - Software Engineer & AI Specialist",
          "url": siteUrl,
          "description": "Nilesh Nayan's portfolio website showcasing software development, machine learning, and AI projects",
          "publisher": {
            "@type": "Person",
            "name": "Nilesh Nayan"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://nnn007.github.io/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
