import { useState, useEffect } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  function handleGoodClick() {
    setGood((curr) => curr + 1);
  }
  function handleNeutralClick() {
    setNeutral((curr) => curr + 1);
  }
  function handleBadClick() {
    setBad((curr) => curr + 1);
  }

  useEffect(() => {
    function calculateAll() {
      setAll(good + neutral + bad);
    }

    function calculateAverage() {
      setAverage((good - bad) / all);
    }

    function calculatePositive() {
      setPositive((good / all) * 100);
    }

    calculateAll();
    calculateAverage();
    calculatePositive();
  }, [good, neutral, bad, all]);

  return (
    <div>
      <div>
        <h1>Give FeedBack</h1>
        <span>
          <Button text="Good" action={handleGoodClick} />
          <Button text="Neutral" action={handleNeutralClick} />
          <Button text="Bad" action={handleBadClick} />
        </span>
      </div>
      {good || neutral || bad ? (
        <Statistics
          all={all}
          good={good}
          average={average}
          bad={bad}
          neutral={neutral}
          positive={positive}
        />
      ) : (
        <div>
          <h1>Statistics</h1>
          <p>No feedback given</p>
        </div>
      )}
    </div>
  );
};

export default App;
