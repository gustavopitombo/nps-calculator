import React, { useState } from 'react';

export const App = () => {
  const [detractors, setDetract] = useState(0);
  const [neutrals, setNeutral] = useState(0);
  const [promoters, setPromote] = useState(0);

  const setScore = (score: number) => {
    if (score <= 6) {
      setDetract(detractors + 1);
    } else if (score >= 9) {
      setPromote(promoters + 1);
    } else {
      setNeutral(neutrals + 1);
    }
  }

  const checkScore = () : string => {
    const total = promoters + neutrals + detractors;

    if (total === 0) return '0';

    return (((promoters - detractors) / total) * 100).toFixed(2);
  };

  return (
    <>
      <h1>Net Promoter Score: %{checkScore()} </h1>
      <button onClick={() => setScore(1)}>1</button>
      <button onClick={() => setScore(2)}>2</button>
      <button onClick={() => setScore(3)}>3</button>
      <button onClick={() => setScore(4)}>4</button>
      <button onClick={() => setScore(5)}>5</button>
      <button onClick={() => setScore(6)}>6</button>
      <button onClick={() => setScore(7)}>7</button>
      <button onClick={() => setScore(8)}>8</button>
      <button onClick={() => setScore(9)}>9</button>
      <button onClick={() => setScore(10)}>10</button>
    </>
  )
}
