import './App.css';

const Hello = (props) => {
  // console.log(props);
  return (
    <div>
      <p>Hello { props.name }, your age is { props.age }</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Sathish' age='30' />
      <Hello name='Krish' age='10' />
    </div>
  )
}

export default App;