const Header = (props) => {
  console.log("header component called")
  console.log(props.course)
  return(<h1>{props.course}</h1>)
    
}
const Part=(props) => {
  console.log("part component called")
  return(
    <>
    <p>{props.partNumber} {props.exercisesNumber}</p>
    </>
  )
}
const Content = (props) => {
  console.log("Content component called")
  console.log(props.part1,props.part2,props.part3,props.exercises1,props.exercises2,props.exercises3)
  return(
    <>
      <Part partNumber={props.part1} exercisesNumber={props.exercises1} />
      <Part partNumber={props.part2} exercisesNumber={props.exercises2} />
      <Part partNumber={props.part3} exercisesNumber={props.exercises3} />
    </>
  )

}

const Total=(props) => {
  console.log("Total component called")
  return(
    <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    </div>
  )
}

export default App