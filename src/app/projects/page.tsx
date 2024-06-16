"use client";
import React from "react";
import Navbar from "@/components/navbar"; 
import TypingText from "@/components/typingtext";
import CardComponent from "@/components/projectcard";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type Position = "absolute" | "relative" | "static" | "sticky" | "fixed";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

enum TextAlign {
  left = 'left',
  right = 'right',
  center = 'center',
  justify = 'justify',
}


const Projects = () => {
  const typingSpeed = 100;
  const cardData = [
    {
      title: "_MyShell",
      description: "Built a personal shell in C++ that supports various Unix commands and features. The shell handles basic commands, input and output redirection, single and multiple pipes, and supports complex command chaining with redirection and pipes.",
      technologies: ["linux", "cpp"],
      imageUrl: "shell_bg.jpg",
      githubURL: "https://github.com/PatralikaGhosh/_myShell/tree/main",
    },
    {
      title: "Portfolio Website",
      description: "I made this portfolio to summarize all of my skills, certifications, projects and experience.",
      technologies: ["html5","css3","typescript", "nextjs"],
      imageUrl: "portfolio_bg.png",
      githubURL: "https://github.com/PatralikaGhosh/PatralikaGhosh.github.io.git",
    },
    {
      title: "POS System",
      description: "The system featured distinct views for Customers, Managers, and Cashiers, providing a tailored user experience. Our project utilized a robust Django backend and an interactive React.js frontend, with a PostgreSQL database ensuring efficient data storage and seamless order management.",
      technologies: ["react", "django", "sql"],
      imageUrl: "pos_system.png",
      githubURL: "",
    },
    {
      title: "Blackjack Game",
      description: "This is a very simple implementation of the BlackJack game in Python.",
      technologies: ["python"],
      imageUrl: "blackjack_bg.jpg",
      githubURL: "https://github.com/PatralikaGhosh/Blackjack",
    }
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <TypingText 
          textToType="Projects" 
          typingSpeed={typingSpeed} 
          style={styles.heading} 
        />
        <div style={styles.cardsContainer}>
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              technologies={card.technologies}
              imageUrl={card.imageUrl}
              githubURL={card.githubURL}
            />
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
    flexDirection: "column" as FlexDirection,
  },
  main: {
    backgroundColor: "black",
    flex: 1,
    display: "flex",
    flexDirection: "column" as FlexDirection,
    alignItems: "center",  
    justifyContent: "center",  
    padding: "20px",
    position: "relative" as Position,
    fontFamily: "'Roboto Mono', monospace",
  },
  heading: {
    color: "green",
    fontSize: "100px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "center" as TextAlign,  
    marginBottom: "40px",  
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row" as FlexDirection,
    flexWrap: "wrap" as FlexWrap,
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export default Projects;
