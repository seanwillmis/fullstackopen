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
// all
// average

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
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState([]);

  /** Define functions */
  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average.concat(1));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage(average.concat(0));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average.concat(-1));
  };

  const calculateAverage = (array) =>
    array.reduce((a, b) => a + b, 0) / array.length;

  const calculatePercentage = (partial, total) =>
    (100 * partial) / total + " %";

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
      <Statistic name="All: " value={all} />
      <Statistic name="Average: " value={calculateAverage(average)} />
      <Statistic name="Positive: " value={calculatePercentage(good, all)} />
    </div>
  );
};

export default App;
