import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '@components';

const StyledMainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const StyledSection = styled.section`
  margin-bottom: 60px;
`;

const StyledTitle = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  margin-bottom: 20px;
  color: var(--lightest-slate);
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(20px, 4vw, 30px);
  margin-bottom: 40px;
  color: var(--slate);
  font-weight: 400;
`;

const StyledParagraph = styled.p`
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin-bottom: 20px;
  color: var(--light-slate);
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const StyledListItem = styled.li`
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin-bottom: 10px;
  color: var(--light-slate);
  padding-left: 20px;
  position: relative;

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--green);
  }
`;

const StyledHighlight = styled.span`
  color: var(--green);
  font-weight: 600;
`;

const AboutNileshNayanPage = ({ location }) => (
  <Layout location={location}>
    <Head 
      title="About Nilesh Nayan - Software Engineer & AI Specialist"
      description="Learn more about Nilesh Nayan, a software engineer and AI specialist. Discover Nilesh Nayan's expertise in software development, machine learning, and artificial intelligence."
    />
    
    <StyledMainContainer>
      <StyledSection>
        <StyledTitle>About Nilesh Nayan</StyledTitle>
        <StyledSubtitle>Software Engineer & AI Specialist</StyledSubtitle>
        
        <StyledParagraph>
          <StyledHighlight>Nilesh Nayan</StyledHighlight> is a passionate software engineer and artificial intelligence specialist with expertise in developing innovative solutions that bridge the gap between traditional software development and cutting-edge AI technologies.
        </StyledParagraph>

        <StyledParagraph>
          With a strong foundation in software engineering principles and a deep understanding of machine learning algorithms, <StyledHighlight>Nilesh Nayan</StyledHighlight> has successfully delivered projects ranging from web applications to complex AI systems.
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <h2>Nilesh Nayan's Expertise</h2>
        <StyledList>
          <StyledListItem><StyledHighlight>Software Development:</StyledHighlight> Full-stack web development, mobile applications, and enterprise software solutions</StyledListItem>
          <StyledListItem><StyledHighlight>Machine Learning:</StyledHighlight> Predictive modeling, natural language processing, and computer vision applications</StyledListItem>
          <StyledListItem><StyledHighlight>Artificial Intelligence:</StyledHighlight> AI system design, neural networks, and intelligent automation solutions</StyledListItem>
          <StyledListItem><StyledHighlight>Web Technologies:</StyledHighlight> React, JavaScript, Python, and modern web frameworks</StyledListItem>
          <StyledListItem><StyledHighlight>Data Analytics:</StyledHighlight> Data processing, visualization, and insights generation</StyledListItem>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <h2>Nilesh Nayan's Professional Journey</h2>
        <StyledParagraph>
          <StyledHighlight>Nilesh Nayan</StyledHighlight> has consistently demonstrated the ability to tackle complex technical challenges while maintaining a focus on delivering user-centric solutions. His work spans across various domains including:
        </StyledParagraph>
        
        <StyledList>
          <StyledListItem>Large-scale log analytics systems</StyledListItem>
          <StyledListItem>Machine learning frameworks and applications</StyledListItem>
          <StyledListItem>Web development and user interface design</StyledListItem>
          <StyledListItem>Data processing and visualization tools</StyledListItem>
          <StyledListItem>AI-powered automation solutions</StyledListItem>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <h2>Connect with Nilesh Nayan</h2>
        <StyledParagraph>
          <StyledHighlight>Nilesh Nayan</StyledHighlight> is always interested in collaborating on innovative projects and sharing knowledge with the developer community. Whether you're looking for technical expertise, project collaboration, or just want to discuss the latest in AI and software development, feel free to reach out.
        </StyledParagraph>
        
        <StyledList>
          <StyledListItem>GitHub: <a href="https://github.com/nnn007" target="_blank" rel="noopener noreferrer">github.com/nnn007</a></StyledListItem>
          <StyledListItem>LinkedIn: <a href="https://www.linkedin.com/in/nilesh-nayan" target="_blank" rel="noopener noreferrer">linkedin.com/in/nilesh-nayan</a></StyledListItem>
          <StyledListItem>Twitter: <a href="https://twitter.com/nayannilesh" target="_blank" rel="noopener noreferrer">@nayannilesh</a></StyledListItem>
          <StyledListItem>Email: <a href="mailto:nilesh.nayan42@gmail.com">nilesh.nayan42@gmail.com</a></StyledListItem>
        </StyledList>
      </StyledSection>
    </StyledMainContainer>

    {/* Structured Data for About Page */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Nilesh Nayan",
        "description": "Learn more about Nilesh Nayan, a software engineer and AI specialist",
        "url": "https://nnn007.github.io/about-nilesh-nayan",
        "mainEntity": {
          "@type": "Person",
          "name": "Nilesh Nayan",
          "jobTitle": "Software Engineer & AI Specialist",
          "description": "Nilesh Nayan is a software engineer and AI specialist with expertise in software development, machine learning, and artificial intelligence",
          "knowsAbout": [
            "Software Development",
            "Machine Learning", 
            "Artificial Intelligence",
            "Web Development",
            "React",
            "JavaScript",
            "Python"
          ],
          "sameAs": [
            "https://github.com/nnn007",
            "https://twitter.com/nayannilesh",
            "https://www.linkedin.com/in/nilesh-nayan"
          ]
        }
      })}
    </script>
  </Layout>
);

AboutNileshNayanPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutNileshNayanPage;
