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

const App12 = () => {

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

const App13=()=>{
    const Header = (props) => {
    console.log("header component called only inside of component App1")
    return(<h1>{props.course}</h1>)
  }
  const Part=(props)=>{
    console.log("Component Part was called with props")
    console.log(props)
    return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  const Content=(props)=>{
    return(
      <>
      <Part   part={props.part1}/>
      <Part   part={props.part2}/>
      <Part   part={props.part3}/>
      </>
    )
  }
  
const Total=(props) => {
  console.log("Total component called")
  return(
    <>
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </>
  )

}
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>

  )
}

const App14=()=>{
  console.log("this is for the exercise 1.4...")
  const Header = (props) => {
    console.log("header component called only inside of component App1")
    return(<h1>{props.course}</h1>)
  }
  const Part=(props)=>{
    console.log("Component Part was called with props")
    console.log(props)
    return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  const Content=(props)=>{
    return(
      <>
      <Part   part={props.part1}/>
      <Part   part={props.part2}/>
      <Part   part={props.part3}/>
      </>
    )
  }
  
const Total=(props) => {
  console.log("Total component called")
  return(
    <>
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </>
  )

}
  
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]
}

export default App14