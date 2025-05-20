const App = () => {
 
  return (
    <div>
      <h1 style={{marginLeft:"450px"}}>Kepping Components Pure</h1>
      <Cup guest={1}/>
      <Cup guest={3}/>
      <Cup guest={5}/>
    </div>
  )


}
  const Cup=({guest})=>{
    let count=guest
     return (
    <div>
      <h1 style={{marginLeft:"150px"}}>We have {count} guest and we have to make {count} cup of tea</h1>
    </div>
  )
  }
export default App;