import { useState } from "react";

// components
// ----------
// Anecdote component
// Button component

// states
// -----
// anecdote

// functions
// ---------
// handleButtonClick
// generateRandomNumber

/** Define components */
const Anecdote = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>Next Anecdote</button>;
};

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

  /** Define functions */
  const handleButtonClick = () => {
    setAnecdote(generateRandomNumber(0, 7));
  };

  console.log(anecdote);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <Anecdote text={anecdotes[anecdote]} />
      <Button handleClick={handleButtonClick} />
    </div>
  );
};

export default App;
