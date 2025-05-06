export default function App(){
  const name = "Rahul";
  const x = 10;
  const y = 20;

  return (
    <div>
      <h1>Hello {name} </h1>
      <h1>{10+20+30}</h1>
      <h1>{x+y}</h1>
      <h1>{x*y}</h1>
      <button onClick={()=>alert('Clicked')}>Alert</button>
    </div>
  )
}