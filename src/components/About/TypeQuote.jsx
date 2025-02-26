import { useState, useEffect, useMemo } from "react";

function TypeQuote() {
  const strings = useMemo(() => [
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "HTML",
    "CSS",
    "PHP",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Azure",
    "C#",
    "Java",
    "Docker"
  ], []);

  const [text, setText] = useState(""); //  Holds current displayed text
  const [index, setIndex] = useState(0); //  Tracks current word index
  const [charIndex, setCharIndex] = useState(0); //  Tracks character being typed
  const [isDeleting, setIsDeleting] = useState(false); //  Indicates if deleting
  const [isPaused, setIsPaused] = useState(false); //  Prevents fast re-renders
  const [delay, setDelay] = useState(100); //  Adjusts typing speed dynamically

  useEffect(() => {
    if (isPaused) return; //  Prevents unnecessary updates

    const currentString = strings[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        //  Typing forward
        setText(currentString.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        //  Deleting backward
        setText(currentString.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }

      //  When fully typed, pause before deleting
      if (!isDeleting && charIndex === currentString.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 1000); //  1s pause before deleting starts
      }

      //  When fully deleted, switch words *before* state resets
      else if (isDeleting && charIndex === 1) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
          setCharIndex(0); //  Prevents brief full-word flashing
          setText(""); //  Clears text properly before next word starts
        }, 500); //  Small delay before next word starts
      }

      //  Adjust typing & deleting speeds dynamically
      setDelay(isDeleting ? 50 : 100);
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, delay, strings, isPaused]);

  return <p className="main-name"><i>{text}|</i></p>;
}

export default TypeQuote;