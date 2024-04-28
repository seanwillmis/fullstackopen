import { useState } from "react";

// components
// ----------
// header component
// button component
// statistic component
// statistics component

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

const Statistics = (props) => {
  return props.stat4 > 0 ? (
    <div>
      <Statistic name="Good: " value={props.stat1} />
      <Statistic name="Neutral: " value={props.stat2} />
      <Statistic name="Bad: " value={props.stat3} />
      <Statistic name="All: " value={props.stat4} />
      <Statistic name="Average: " value={props.stat5} />
      <Statistic name="Positive: " value={props.stat6} />
    </div>
  ) : (
    <div></div>
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
      <Statistics
        stat1={good}
        stat2={neutral}
        stat3={bad}
        stat4={all}
        stat5={calculateAverage(average)}
        stat6={calculatePercentage(good, all)}
      />
    </div>
  );
};

export default App;
