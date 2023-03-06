

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

const App = (props) => {
  console.log(props)
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App;
