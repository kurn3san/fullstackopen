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
  console.log("this is for the exercise 1.4...")
  const Header = (props) => {
    console.log("header component called only inside of component App1")
    return(<h1>{props.course}</h1>)
  }
  const Part=(props)=>{
    console.log("Component Part was called with props")
    console.log(props.partThing)
    return(
      <p>
        {props.partThing.name} {props.partThing.exercises}
      </p>
    )
  }
  const Custo=(props)=>{
    console.log(props.thing[0])
    return(<>
              <div>
                <p>this is the custo element</p>
                
              </div>
    </>)
  }
  const Content=(props)=>{
    console.log(props.thing[0])
    return(
      <>
        <Part partThing={props.thing[0]}/>

        <Part partThing={props.thing[1]}/>
        <Part partThing={props.thing[2]}/>

      </>
    )

  }
  
const Total=(props) => {
  console.log("Total component called")
  return(
    <>
    <p>Number of exercises {props.TotalThing[0].exercises + props.TotalThing[1].exercises + props.TotalThing[2].exercises}</p>
    </>
  )

}
  
  

  return (<>
      <Header course={course}/>
      <Content thing={parts}/>
      <Total TotalThing={parts}/>      
  </>)
}
const App15 = () => {
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
      }
    ]
  }
  const Header=(props)=>{
    console.log("header called")
    console.log(props.course.name)
    return(<>
      <h1>{course.name}</h1>
    </>)
  }
  const Part=(props)=>{
    console.log("a part was called...")
    return(
    <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  const Content=(props)=>{
    console.log("content called..")
    console.log(props.parts)
    return(<>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
      
    </>)
  }
  const Total=(props)=>{
    console.log("Total was called")
    return(
      <>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App15