import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value} {text === 'positive' ? ' %' : ''}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <>
        <h3>statistics</h3>
        <div>No feedback given</div>
      </>
    )
  }

  return (
    <>
      <h3>statistics</h3>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={(good - bad) / all || 0} />
          <StatisticLine text='positive' value={good / all * 100 || 0} />
        </tbody>
      </table> 
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
      <h3>give feedback</h3>

      <div>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
