// components/Navbar.tsx
import styled from 'styled-components';
import Link from 'next/link';

const NavbarContainer = styled.nav`
  background-color: black;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: green;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/skills" passHref>
            <NavLink>Skills</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/research" passHref>
            <NavLink>Research</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
