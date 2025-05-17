import { useRef } from "react";

const App=()=>{

  const userRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    console.log("User Name",user);

   const password =  passwordRef.current.value;
   console.log("User Password",password);
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
     marginLeft:'350px',
     marginBottom:'5px'
    }}>
      <div>
        <h1>User Input Show in the Inspect</h1>
      </div>

      <form onSubmit={submitHandler}>
        <div>
        <input 
        type="text" 
        placeholder="enter the name"
        ref={userRef}
        style={{height:'30px', width:'200px', borderRadius:'5px'}}
        />
        <br /><br />

         <input 
        type="password" 
        placeholder="enter the name"
        ref={passwordRef}
        style={{height:'30px', width:'200px', borderRadius:'5px'}}
        />

        <br /><br />



        <button 
          style={{
            marginLeft:'45px'
          }}
        >Submit</button>

        
      </div>
      </form>

    </div>
  )
}
export default App;