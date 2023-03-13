import { useState } from 'react'

const App1 = () => {
  const Hello = (props) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

const App2=()=>{
  const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age
  
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}


const App3 = () => {
  const [ counter, setCounter ] = useState(0)
console.log(counter)
//console.log(setCounter)
  setTimeout(
    () => setCounter(counter +1),
    1000
  )
  
  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
const App4 = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0) // this is called hooking

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}


export default App;
