import { useState } from "react";

// components
// ----------
// header component
// button component
// statistic component

// states
// -----
// good
// neutral
// bad

// functions
// ---------
// handleGoodClick
// handleNeutralClick
// handleBadClick

/** Define components */
const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = ({ name, value }) => {
  return (
    <div>
      <p>
        {name} {value}
      </p>
    </div>
  );
};

const App = () => {
  /** Define data variables */
  const headerOne = "Give Feedback";
  const headerTwo = "Statistics";

  /** Define states */
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /** Define functions */
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text={headerOne} />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header text={headerTwo} />
      <Statistic name="Good: " value={good} />
      <Statistic name="Neutral: " value={neutral} />
      <Statistic name="Bad: " value={bad} />
    </div>
  );
};

export default App;
