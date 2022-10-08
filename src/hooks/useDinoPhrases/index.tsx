import { useState } from "react";
import { useInterval } from "usehooks-ts";
const START_PHRASES = true;
const PHRASE_DELAY_SECONDS = 10;
const dinoPhrases = [
  {
    author: "TISTA, Ba",
    phrase: '"Com grandes poderes, vem grandes poderes"',
  },
  {
    author: "Anonymous coder",
    phrase: '"const zero = 0"',
  },
];

export function useDinoPhrases() {
  const [phrase, setPhrase] = useState(0);
  const phraseInterval = 1000 * PHRASE_DELAY_SECONDS;

  function getCurrentPhrase() {
    return dinoPhrases[phrase];
  }

  useInterval(
    () => {
      if (phrase == dinoPhrases.length - 1) {
        setPhrase(0);
      } else {
        setPhrase(phrase + 1);
      }
    },
    START_PHRASES ? phraseInterval : null
  );

  return {
    getCurrentPhrase,
  };
}
