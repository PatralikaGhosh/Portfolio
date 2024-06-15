"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import TypingText from "@/components/typingtext"; // Make sure to adjust the import path as necessary

const Skills = () => {
  const typingSpeed = 100;

  const skillslist = [
    { title: "C++", img: "c_plus_plus.png", url: "https://en.wikipedia.org/wiki/C%2B%2B"},
    { title: "Java", img: "java.jpeg", url: "https://en.wikipedia.org/wiki/Java_(programming_language)"},
    { title: "Python", img: "python.jpg", url: "https://en.wikipedia.org/wiki/Python_(programming_language)"},
    { title: "HTML", img: "html.jpg", url: "https://en.wikipedia.org/wiki/HTML"},
    { title: "CSS", img: "css.jpg", url: "https://en.wikipedia.org/wiki/CSS" },
    { title: "Typescript", img: "/typescript.jpg", url: "https://www.typescriptlang.org/"},
    { title: "Javascript", img: "javascript.webp", url: "https://en.wikipedia.org/wiki/JavaScript"},
    { title: "React.js", img: "react.jpg", url: "https://reactjs.org/" },
    { title: "Next.js", img: "nextjs.png", url: "https://nextjs.org/" },
    { title: "Django", img: "Django.jpg", url: "https://www.djangoproject.com/"},
    { title: "PostgreSQL", img: "postgre-sql.jpg", url: "https://www.postgresql.org/" },
    { title: "R", img: "r_lang.png", url: "https://www.r-project.org/"},
    { title: "Latex", img: "latex.png", url: "https://www.latex-project.org/"},
    { title: "Linux", img: "linux.jpg", url: "https://en.wikipedia.org/wiki/Linux"},
  ];

  const certslist = [
    { title: "Google Cybersecurity Certificate", img: "google_cert.jpg", url: "https://www.coursera.org/professional-certificates/google-cybersecurity"},
    { title: "Machine Learning in Python", img: "udemy.jpg", url: "https://www.udemy.com/course/machine-learning-in-python/"},
    { title: "Complete Python Bootcamp", img: "udemy.jpg", url: "https://www.udemy.com/course/complete-python-bootcamp/"},
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
