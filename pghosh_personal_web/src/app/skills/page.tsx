"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import TypingText from "@/components/typingtext"; 
import { Button } from '@nextui-org/react';
import styled from 'styled-components';
import Link from 'next/link';

const CustomButton = styled(Button)`
  background-color: green;
  color: white;
  padding: 8px 16px; 
  border-radius: 4px; 
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Skills = () => {
  const typingSpeed = 100;

  const skillslist = [
    { title: "C++", img: "c_plus_plus.png"},
    { title: "Java", img: "java.jpeg"},
    { title: "Python", img: "python.jpg"},
    { title: "HTML", img: "html.jpg"},
    { title: "CSS", img: "css.jpg"},
    { title: "Typescript", img: "/typescript.jpg"},
    { title: "Javascript", img: "javascript.webp"},
    { title: "React.js", img: "react.jpg"},
    { title: "Next.js", img: "nextjs.png" },
    { title: "Django", img: "Django.jpg"},
    { title: "PostgreSQL", img: "postgre-sql.jpg" },
    { title: "R", img: "r_lang.png"},
    { title: "Latex", img: "latex.png"},
    { title: "Linux", img: "linux.jpg"},
  ];

  const certslist = [
    { title: "Google Cybersecurity Certificate", img: "google_cert.jpg", url: "https://coursera.org/verify/professional-cert/MNW77W3KMA7Y"},
    { title: "Machine Learning in Python", img: "udemy.jpg", url: "https://www.udemy.com/certificate/UC-d56dcc42-b710-4d0f-862d-268417359105/"},
    { title: "Complete Python Bootcamp", img: "udemy.jpg", url: "https://www.udemy.com/certificate/UC-22cc9fca-b525-462c-981f-2c438f918e37/"},
  ];


  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <TypingText 
          textToType="Skills" 
          typingSpeed={typingSpeed} 
          style={styles.heading_Skills} 
        />
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4" style={styles.cardsContainer}>
          {skillslist.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
        <TypingText 
          textToType="Certifications" 
          typingSpeed={typingSpeed} 
          style={styles.heading_Cert} 
        />
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-4" style={styles.cardsContainer}>
          {certslist.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <Link href={item.url} passHref>
                  <CustomButton as="a" color="primary" variant="ghost" isLoading>
                    Click for more info
                  </CustomButton>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "black",
    height: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    backgroundColor: "black",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "20px",
    position: "relative",
  },
  heading_Skills: {
    color: "green",
    fontSize: "100px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "right",
    position: "absolute",
    top: 0,
    right: 0,
    margin: "20px",
  },
  heading_Cert: {
    color: "green",
    fontSize: "100px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "left",
    position: "absolute",
    left: 0,
    bottom: 200,
    margin: "20px",
  },
  cardsContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginTop: "170px",
    marginBottom: "30px",
    width: "100%",
  },
};

export default Skills;
