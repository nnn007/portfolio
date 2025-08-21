import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact, Head } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Head 
      title="Nilesh Nayan - Software Engineer & AI Specialist | Portfolio"
      description="Nilesh Nayan is a software engineer and AI specialist. View Nilesh Nayan's portfolio, projects, and blog posts on software development, machine learning, and artificial intelligence."
    />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>

    {/* Structured Data for Portfolio */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Portfolio",
        "name": "Nilesh Nayan Portfolio",
        "alternateName": "Nilesh Nayan - Software Engineer & AI Specialist",
        "description": "Nilesh Nayan's portfolio showcasing software development, machine learning, and AI projects",
        "url": "https://nnn007.github.io",
        "author": {
          "@type": "Person",
          "name": "Nilesh Nayan",
          "jobTitle": "Software Engineer & AI Specialist",
          "description": "Nilesh Nayan specializes in software development, machine learning, and artificial intelligence"
        },
        "mainEntity": {
          "@type": "WebSite",
          "name": "Nilesh Nayan Portfolio",
          "url": "https://nnn007.github.io"
        },
        "about": {
          "@type": "Thing",
          "name": "Software Engineering and Artificial Intelligence"
        },
        "keywords": "Nilesh Nayan, portfolio, software engineer, AI specialist, machine learning, web development"
      })}
    </script>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
