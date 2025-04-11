import React, { useEffect, useState } from "react";

const baseText = "My personal projects";
const phrases = [
  "to learn",
  "for fun",
  "to grow",
  "with friends",
  "to build",
  "to share with others",
  "to build a portfolio",
  "to challenge myself",
  "to create tools"
];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(`${baseText} ${phrases[0]}`);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [charIndex, setCharIndex] = useState(phrases[0].length);

  useEffect(() => {
    const nextIndex = (index + 1) % phrases.length;
    const fullText = phrases[nextIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setDisplayText(
              `${baseText} ${currentText.substring(0, charIndex - 1)}`
            );
          } else {
            setIsDeleting(false);
            setCurrentText(fullText);
            setIndex(nextIndex);
          }
        } else {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
            setDisplayText(
              `${baseText} ${currentText.substring(0, charIndex + 1)}`
            );
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      },
      isDeleting ? 50 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, index]);

  return <h2 className="title fade-in-down">{displayText}</h2>;
}
