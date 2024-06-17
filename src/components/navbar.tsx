// components/Navbar.tsx
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CustomButton = styled(Button)`
  color: green;
  padding: 8px 16px; 
  border-radius: 4px; 
  &:hover {
    background-color: green;
    color: white;
  }
`;

const NavbarContainer = styled.nav`
  background-color: black;
  padding: 10px 20px;
  font-family: 'Roboto Mono', monospace;
  display: flex;
  justify-content: space-between; /* Distribute space between items */
  align-items: center;
`;


const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const HomeButton = styled(Button)`
  padding: 0; 
  border: none; 
  color: green;
  svg {
    transition: color 0.3s; /* Smooth color transition */
  }

  &:hover {
    svg {
      color: white; /* Change icon color on hover */
    }
  }
`;

const IconLink = styled.a`
  color: green;
  font-size: 24px;
  margin-left: 20px;
  transition: color 0.3s;
  &:hover {
    color: white;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link href="/" passHref>
            <HomeButton as="a" color="primary" variant="ghost">
              <FontAwesomeIcon icon={faHome} />
            </HomeButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/projects" passHref>
            <CustomButton as="a" color="primary" variant="ghost">
              Projects
            </CustomButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/skills" passHref>
            <CustomButton as="a" color="primary" variant="ghost">
              Skills
            </CustomButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://nimrobotics.com/hfes23/" passHref>
            <CustomButton as="a" color="primary" variant="ghost">
              Research
            </CustomButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://drive.google.com/file/d/1lUFYfIXC-3xTTC-tbybiSlrVZwVf5-5i/view" passHref>
            <CustomButton as="a" color="primary" variant="ghost">
              Resume
            </CustomButton>
          </Link>
        </NavItem>
      </NavList>
      <RightContainer>
        <Link href="https://github.com/PatralikaGhosh" passHref>
          <IconLink>
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </Link>
        <Link href="www.linkedin.com/in/patralika-ghosh-58331b25b" passHref>
          <IconLink>
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
        </Link>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
