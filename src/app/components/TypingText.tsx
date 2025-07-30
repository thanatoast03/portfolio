
import { useState, useEffect } from "react";

export default function TypingText({
  text,
  speed = 50,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset when text changes
    let i = 0;
    
    const interval = setInterval(() => {
      i++;
      if (i > text.length) {
        clearInterval(interval);
        return;
      }
      
      setDisplayed(text.slice(0, i));
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]); 

  return (
    <h1 className={`inline-block ${className}`}>
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}