"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Skills = () => {
  const [typingText, setTypingText] = useState("");
  const textToType = "Skills";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const textLength = textToType.length;
    const timer = setInterval(() => {
      if (index < textLength) {
        const charToAdd = textToType.charAt(index);
        setTypingText(prevText => prevText + charToAdd);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const list = [
    { title: "C++", img: "c_plus_plus.png"},
    { title: "Java", img: "java.jpeg"},
    { title: "Python", img: "python.jpg"},
    { title: "HTML", img: "html.jpg"},
    { title: "CSS", img: "css.jpg" },
    { title: "Typescript", img: "/typescript.jpg" },
    { title: "Javascript", img: "javascript.webp"},
    { title: "React.js", img: "react.jpg" },
    { title: "Next.js", img: "nextjs.png" },
    { title: "Django", img: "Django.jpg"},
    { title: "PostgreSQL", img: "postgre-sql.jpg" },
    { title: "R", img: "r_lang.png"},
    { title: "Latex", img: "latex.png"},
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <h1 id="typing-text" style={styles.heading}>{typingText}</h1>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4" style={styles.cardsContainer}>
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "20px",
    position: "relative",
  },
  heading: {
    color: "green",
    fontSize: "100px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "right",
    position: "absolute",
    top: 0,
    right: 0,
    margin: "20px",
  },
  cardsContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginTop: "250px",
    width: "100%",
  },
};

export default Skills;
