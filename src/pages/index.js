import React from 'react'
import {graphql} from 'gatsby'
import {Box, Flex} from 'grid-styled'
import styled, {css} from 'styled-components'
import FlickrHero from "react-flickr-hero";

import {media} from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`;

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`;

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`;

const Image = styled.div`
width: 40%;
margin: 0 auto;
border: none;
border-bottom: 1px solid #eee;
h6 {
  letter-spacing: 2px;
  font-weight: 700;
  padding-top: 6px;
}
span,
p {
  font-size: 13px;
  line-height: 24px;
  color: #666;
}
span {
  opacity: 0.75;
  float: right;
  text-transform: uppercase;
}
p {
  margin-bottom: 24px;
  opacity: 0.5;
}
${media.xs`
  width: 90%;

`}
`;

export default props => {
    const content = (
        <Content>
            <FlickrHero
                api_key="ce90bde21f2166d5a53c11457f98f07d"
                user_id="55254578@N04"
                album_id="72157714104243511"
                fillPage
            />
            <HeroText/>
            <SocialIcons
                style={{
                    position: 'absolute',
                    margin: '0 auto',
                    left: 0,
                    right: 0,
                    bottom: 16,
                }}
                icons={[
                    {
                        name: 'twitter',
                        href: 'https://twitter.com/thanajade_d',
                    },
                    {
                        name: 'github-alt',
                        href: 'https://github.com/thanajade',
                    },
                    {
                        name: 'linkedin',
                        href: 'https://www.linkedin.com/in/thanajade/',
                    },
                ]}
            />
            <a id="about-me">About Me</a>
            <Section>
                <Title>About Me</Title>
                <Flex alignItems="center" flexDirection="column">
                    <Box px={2} width={[1, 1 / 2]}>
                        <p>I am working as a senior software engineer at
                            <a href="https://www.ascendcorp.com/"> Ascend Group </a>
                            with 10 years of experience in end to end software development specialized in Modern web app
                            technologies,
                            Software testing, Custom business app implementation.
                            For more information please follow my social media linked above.
                        </p>
                    </Box>
                </Flex>
            </Section>
            <Title>Portfolio</Title>
            <a id="portfolio">Portfolio</a>
            <Portfolio items={props.data.allMarkdownRemark.edges}/>
            <a id="experience">Experience</a>
            <Section center dark>
                <h4>Work Experience</h4>
                <Item>
                    <span>Dec 2018 - CURRENT</span>
                    <h6><a href="https://www.pantavanij.com/" target="_blank">Pantavanij</a></h6>
                    <p>Senior Software Engineer</p>
                </Item>
                <Item>
                    <span>Jun 2017 - Nov 2018</span>
                    <h6><a href="https://www.skooldio.com/" target="_blank">Skooldio</a></h6>
                    <p>Software Engineer</p>
                </Item>
                <Item>
                    <span>Aug 2013 - Jun 2015</span>
                    <h6><a href="https://www.agoda.com/" target="_blank">Agoda</a></h6>
                    <p>Software Developer</p>
                </Item>
                <Item>
                    <span>Jul 2010 - Aug 2013</span>
                    <h6><a href="https://www.thalamo.com/" target="_blank">Thalamo</a></h6>
                    <p>Full Stack Developer</p>
                </Item>
                <Item>
                    <span>July 2009 - June 2010</span>
                    <h6><a href="https://www.microsoft.com/th-th" target="_blank">Microsoft (Thailand)</a></h6>
                    <p>Technology Specialist</p>
                </Item>
            </Section>
            <a id="tech">Specialized Technology</a>
            <Section center>
                <h4>Specialized Technology</h4>
                <Showcase
                    images={
                        props.data.allImageSharp ? props.data.allImageSharp.edges : []
                    }
                />
            </Section>
            <a id="education">Education</a>
            <Section dark center>
                <h4>EDUCATION</h4>
                <Item>
                    <span>2013 - 2015</span>
                    <h6>Master of Business Administration (MBA)</h6>
                    <p>Chulalongkorn University</p>
                </Item>
                <Item>
                    <span>2005 - 2009</span>
                    <h6>Bachelor of Engineering (Computer Engineering) 1st Class Honors</h6>
                    <p>Chiang Mai University</p>
                </Item>
            </Section>
            <a id="certifications">Licenses and Certifications</a>
            <Section center>
                <h4>Licenses and Certifications</h4>
                <Item>
                    <span>Nov 2016</span>
                    <h6>AWS - Solution Architect Associate <a
                        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-11-22&ci=AWS01122080">AWS01122080</a>
                    </h6>
                    <p>Amazon Web Services</p>
                </Item>
                <Item>
                    <span>May 2018</span>
                    <h6>Investment Consultant</h6>
                    <p>The Securities and Exchange Commission</p>
                </Item>
                <Item>
                    <span>Nov 2016</span>
                    <h6>Independent insurance agent</h6>
                    <p>Office of Insurance Commission</p>
                </Item>
            </Section>
            <a id="honors">Accomplishments</a>
            <Section dark center>
                <h4>ACCOMPLISHMENT</h4>
                <Item>
                    <span>Nov 2008</span>
                    <h6>First runner-up Network Security Contest 2008</h6>
                    <p>Office of the higher education commission ,The Communication Solution Co., Ltd</p>
                </Item>
            </Section>
        </Content>
    );
    return (
        <Layout location={props.location}>
            <NavBar main children={content.props.children}/>
            {content}
        </Layout>
    )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: false) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/signature/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: false) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
