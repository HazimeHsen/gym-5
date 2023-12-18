"use client";
import { useEffect, useState } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({ words }) => {
  const wordsArray = words.split(" ");
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, i) => {
          return (
            <motion.span key={i} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <>{renderWords()}</>;
};
