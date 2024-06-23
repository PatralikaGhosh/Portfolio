"use client";
import React from 'react';
import Navbar from "@/components/navbar"; 
import TypingText from "@/components/typingtext";
import Gallery from "@/components/image_gallery";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type Position = "absolute" | "relative" | "static" | "sticky" | "fixed";

enum TextAlign {
  left = 'left',
  right = 'right',
  center = 'center',
  justify = 'justify',
}

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
};


const PhotoGallery = () => {
  const typingSpeed = 100;

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <TypingText 
          textToType="Photography" 
          typingSpeed={typingSpeed} 
          style={styles.heading} 
        />
        <Gallery />
      </main>
    </div>
  );
};

export default PhotoGallery;
