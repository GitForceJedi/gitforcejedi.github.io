import { useState, useEffect } from "react";

function TypeProjectTitle() {
  const text = "PROJECTS"; // Updated name
  const [displayedText, setDisplayedText] = useState(""); // What’s currently typed
  const [charIndex, setCharIndex] = useState(0); // Keeps track of typed characters
  const [isBlinking, setIsBlinking] = useState(true); // Controls cursor blinking

  // Typing effect
  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]); // Adds one letter at a time
        setCharIndex((prev) => prev + 1);
      }, 300); // Typing speed

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [charIndex, text]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsBlinking((prev) => !prev); // Toggles cursor visibility
    }, 500); // Adjust blink speed

    return () => clearInterval(cursorInterval); // Cleanup interval
  }, []);

  return (
    <h2 className="main-name">
      <strong className="main-name">{displayedText}</strong> 
      <span className="cursor" style={{ opacity: isBlinking ? 1 : 0 }}>|</span> {/* ✅ Blinking cursor */}
    </h2>
  );
}

export default TypeProjectTitle;
