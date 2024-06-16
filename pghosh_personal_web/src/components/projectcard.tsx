import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs, faNode, faJava, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const iconsMap = {
  python: faPython,
  react: faReact,
  javascript: faJs,
  nodejs: faNode,
  java: faJava,
  html5: faHtml5,
  css3: faCss3,
};

const customIconsMap = {
  typescript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  django: 'django_logo.svg',
  linux: 'linux_logo.svg',
  cpp: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  nextjs: 'nextjs_logo.svg',
  sql: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
};

const CustomButton = styled(Button)`
  background-color: green;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 20px;  // Add some margin to the button
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CardComponent = ({ title, description, technologies, imageUrl, githubURL }) => {
    return (
      <div style={cardStyles.card}>
        <img src={imageUrl} alt={`${title} image`} style={cardStyles.image} />
        <h2 style={cardStyles.title}>{title}</h2>
        <p style={cardStyles.description}>{description}</p>
        <div style={cardStyles.icons}>
          {technologies.map((tech, index) => (
            iconsMap[tech] ? (
              <FontAwesomeIcon key={index} icon={iconsMap[tech]} style={cardStyles.icon} />
            ) : (
              customIconsMap[tech] && (
                <img key={index} src={customIconsMap[tech]} alt={`${tech} icon`} style={cardStyles.customIcon} />
              )
            )
          ))}
        </div>
        {githubURL && (
          <Link href={githubURL} passHref>
            <CustomButton as="a" color="primary" variant="ghost">
              View on Github
            </CustomButton>
          </Link>
        )}
      </div>
    );
  };

const cardStyles = {
  card: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0 0',
    marginBottom: '20px', // Add margin bottom for spacing
  },
  title: {
    margin: '20px 0 10px', // Add margin for spacing
  },
  description: {
    margin: '10px 0 20px', // Add margin for spacing
  },
  icons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px', // Add margin bottom for spacing
  },
  icon: {
    color: 'green',
    fontSize: '24px',
  },
  customIcon: {
    width: '24px',
    height: '24px',
  },
};

export default CardComponent;
