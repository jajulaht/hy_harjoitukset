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

// Compiles individual courses header and content
const Course = ({ name, parts}) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

// Component for courses
const Courses = ({courses}) => {
  const blocks = courses.map( course => <Course key={course.name} name={course.name} parts={course.parts} />)
  return (
    <div>
      {blocks}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))