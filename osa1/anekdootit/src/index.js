import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  // Min and max for random integer
  let max = anecdotes.length - 1
  let min = 0

  // Initialize votes array
  const votesIni = new Uint8Array(anecdotes.length)
  if (votes.length === 0) {
    setVotes(votesIni)
  }

  // Random integer for choosing anecdotes, handling clicks
  const nextLiner = () => {
      min = Math.ceil(min)
      max = Math.floor(max)
      //The maximum is inclusive and the minimum is inclusive
      let sel = Math.floor(Math.random() * (max - min + 1)) + min 
    return (
      setSelected(sel)
    )
  }

  // Adding a vote to selected anecdote, handling clicks
  const addVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    // JavaScript function that return function, otherwise must change onClick
    return () => {
      setVotes(copy)
    }
  }

  // Get _one_ anecdote with most votes, returns index
  // If more than one most voted, returns first
  // If no votes, returns first index
  const mostVotes = () => {
    let high = 0
    let ind = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > high) {
        high = votes[i]
        ind = i
      }
    }
    return (
      ind
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>has {votes[selected]} votes</p>
      <button onClick={nextLiner}>Next anecdote</button>
      <button onClick={addVote(selected)}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[mostVotes()]}</p>
      <p>has {votes[mostVotes()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
