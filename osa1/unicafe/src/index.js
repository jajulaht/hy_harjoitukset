import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
    <td>{text}</td> 
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  let avg = 0
  let pos = 0
  if (all !== 0) {
    avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all
    pos = (good / all * 100) + " %"
    return (
      <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={avg} />
          <Statistic text="Positive" value={pos} />
        </tbody>
      </table>
      </>
    )
  }
  else {
    return (
      <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setNewGood = () => {
    setGood(good + 1)
  }

  const setNewNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setNewBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={setNewGood} text="good" />
      <Button onClick={setNewNeutral} text="neutral" />
      <Button onClick={setNewBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)