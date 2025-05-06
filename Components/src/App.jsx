function App(){
  return (
    <div>
      <h1>First Component {sum()} </h1>
      <Fruit/>
    </div>
  )
}

function Fruit(){
  return (
    <div>
      <h1>Apple</h1>
    </div>
  )
}

export default App;

function sum(){
  return 10+10;
}
sum()