import React from 'react'

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

export default Courses