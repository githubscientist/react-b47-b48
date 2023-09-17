// our first react component
// javascript function 
// for now it does not receive any arguments
const App = () => {
  const now = new Date();

  // returns a html
  return (
    <div>
      <p>Hello World!, it is { now.toString() }</p>
    </div>
  )
}

export default App;