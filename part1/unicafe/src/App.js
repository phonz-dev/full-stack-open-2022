import { useState } from 'react'

const Statistics = ({ 
    good,
    neutral,
    bad,
    setGood,
    setNeutral,
    setBad
  }) => {
    const all = good + neutral + bad
    return (
      <>
        <h3>give feedback</h3>

        <div>
          <button onClick={() => setGood(good + 1)}>good</button>
          <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
          <button onClick={() => setBad(bad + 1)}>bad</button>
        </div>

        <h3>statistics</h3>

        <div>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {all}</div>
          <div>average {(good - bad) / all || 0}</div>
          <div>positive {good / all * 100 || 0} %</div>
        </div>
      </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      />
    </div>
  )
}

export default App
