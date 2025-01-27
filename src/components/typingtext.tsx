import React, { useEffect, useState } from 'react';

type TypingTextProps = {
  textToType: string;
  typingSpeed: number;
  style: React.CSSProperties;
};

const TypingText = ({ textToType, typingSpeed, style }: TypingTextProps) => {
  const [typingText, setTypingText] = useState("");

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
  }, [textToType, typingSpeed]);

  return <h1 style={style}>{typingText}</h1>;
};

export default TypingText;
