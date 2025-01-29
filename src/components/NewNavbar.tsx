"use client";
import styled from 'styled-components';
import React from "react";
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomeButton = styled(Button)`
  padding: 0; 
  border: none; 
  color: white;
  svg {
    transition: color 0.3s; /* Smooth color transition */
  }

  &:hover {
    svg {
      color: purple; /* Change icon color on hover */
    }
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  margin-left: 20px;
  transition: color 0.3s;
  &:hover {
    color: purple;
  }
`;

const NewNavbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Link href="/" passHref>
            <HomeButton as="a" color="primary" variant="ghost">
              <FontAwesomeIcon icon={faHome} />
            </HomeButton>
          </Link>
        </a>

        <div className="w-full max-w-[1000px] h-full flex flex-row items-center justify-center md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            {/* <a href="#experience" className="cursor-pointer">
              Experience
            </a> */}
            <a href="https://nimrobotics.com/hfes23/" className="cursor-pointer">
              Research
            </a>
            <a href="https://drive.google.com/file/d/15uT_gtPnhp86RFG3HwAFeRHL4h-EghS0/view?usp=sharing" className="cursor-pointer">
              Resume
            </a>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex flex-row gap-5">
          <Link href="https://github.com/PatralikaGhosh" passHref>
            <IconLink>
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
          </Link>
          <Link href="https://www.linkedin.com/in/patralika-ghosh-58331b25b/" passHref>
            <IconLink>
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
