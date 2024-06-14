"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './styles.css'; // Import your CSS file

const Home = () => {
  const [typingText, setTypingText] = useState("");
  const textToType = "Patralika Ghosh";
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

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link id="theme-link" rel="stylesheet" href="/styles.css" />
        <title>Patralika Ghosh's website</title>
      </Head>
      <div className="body_head">
        <header className="centered_header">
          <div className="typing-container"></div>
          <h1 id="typing-text">{typingText}</h1>
          <nav>
            <ul className="horizontal-menu">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="https://nimrobotics.com/hfes23/">Research</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Home;
