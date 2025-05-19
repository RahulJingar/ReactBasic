import { useTransition } from "react";

const App = () => {

  const [pending, setPending] = useTransition(false);

  const clickHandler =  () => {
    
    setPending( async ()=> {
       await new Promise(res=> setTimeout(res,5000));
    console.log("Done");
    })
   
  }

  return (
    <div>
      <h1>Use to UseTransition!!</h1>

      {
        pending ? 
        <img style={{width:'150px'}} src="https://i.pinimg.com/originals/07/44/76/074476209bb41a39913981195e17e363.gif " alt="" /> : null
      }

    <button disabled={pending} onClick={clickHandler}>Click!!</button>

    </div>
  )
}
export default App;