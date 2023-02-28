const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const friends = [
  { name: 'Peter', age: 4 },
  { name: 'Maya', age: 10 },
]

const App = () => {
  const name = 'Peter'
  const age = 10
  const koroAge=26
  const koroName='Koro'
  const Koro={koroName,koroAge}
  const names=[Koro.koroName,friends[0].name,friends[1].name]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name={Koro.koroName } age={koroAge } />
      <Footer/>
      
      <div>
      <p>{names}</p>
      <p>{Koro.koroName} {Koro.koroAge}</p>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
    </>
  )
}



export default App
