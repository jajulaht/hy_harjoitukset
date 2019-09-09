import React from 'react'
import ReactDOM from 'react-dom'

// Outputs course name
const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

// Outputs parts' names and exercises in a paragraph
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

// Compiles different parts from array
// Uses map function to modify array content
// and add to new array
const Content = ({ parts }) => {
  const rows = parts.map( part => <Part key={part.name} name={part.name} exercises={part.exercises} />)
  return (
    // Use of fragment
    <>
      {rows}
    </>
  )
}

// Sums courses exercises, reduce structure from Fun Fun Function
const Total = ({ parts }) => {
  let sum = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><strong>Total of {sum} exercises</strong></p>
  )
}

// Compiles courses header and content
const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      {/* <Total   parts={course.parts} 
      />*/}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))