// components/Navbar.tsx
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
