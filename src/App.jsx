// our first react component
// javascript function 
// for now it does not receive any arguments
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log(now, a + b);

  // returns a html
  return (
    <div>
      <p>Hello World!, it is {now.toString()}</p>
      <p>
        {a} plus {b} is { a + b } 
      </p> <br />
    </div>
  )
}

export default App;