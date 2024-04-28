import { useState } from "react";
import Button from "./components/Button";
import Anecdote from "./components/Anecdote";
import Votes from "./components/Votes";

// components
// ----------
// Anecdote component
// Button component
// Votes component

// states
// -----
// anecdote
// votes
// randomNumber

// functions
// ---------
// handleAnecdoteClick
// handleVoteClick
// generateRandomNumber

const App = () => {
  /** Define data */
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  /** Define states */
  const [anecdote, setAnecdote] = useState(0);
  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState({});

  /** Define functions */
  const handleAnecdoteClick = () => {
    const randomNumber = generateRandomNumber(0, 7);
    setAnecdote(randomNumber);
    setRandom(randomNumber);
  };

  const handleVoteClick = () => {
    if (votes[random] !== undefined) {
      votes[random] = votes[random] + 1; // subsequent votes
    } else {
      votes[random] = 1; // initial vote
    }
    setVotes({ ...votes });
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log(votes);
  return (
    <div>
      <Anecdote text={anecdotes[anecdote]} />
      <Votes votes={votes} random={random} />
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleAnecdoteClick} text="Next Anecdote" />
    </div>
  );
};

export default App;
