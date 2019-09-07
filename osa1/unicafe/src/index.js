import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  let pos = good / all * 100

  const setNewGood = (newValue) => {
    setGood(newValue)
  }

  const setNewNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const setNewBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={ () => setNewGood(good + 1) } text="good" />
      <Button handleClick={ () => setNewNeutral(neutral + 1) } text="neutral" />
      <Button handleClick={ () => setNewBad(bad + 1) } text="bad" />
      <h2>Statistics</h2>
      <p>Good {good}<br />
        Neutral {neutral}<br />
        Bad {bad}<br />
        All {all}<br />
        Average {avg}<br />
        Positive {pos} %
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)