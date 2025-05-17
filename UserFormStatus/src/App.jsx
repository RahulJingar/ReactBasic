import { useRef } from 'react';
import {useFormStatus} from 'react-dom';
const App = () => {

  const UserForm = () => {

    const {pending} = useFormStatus();




    return (
      <div>
        <input 
        type="text" 
        placeholder="Enter Name"
        ref={InputRef}
        />
        <br /><br />

        <input 
        type="password" 
        placeholder="Enter Password"
        ref={PasswordRef}
        />
        <br /><br />


        <button disabled={pending}>{pending ? 'Submitting...':'Submit'}</button>
      </div>
    )
  }

  const submitHandler = async () => {
   await new Promise(resolve=>setTimeout(resolve,2000))
    console.log("Done")
  }

 
    const InputRef = useRef();
    const PasswordRef = useRef();

  const changeHandler = () => {
    const userInput = InputRef.current.value;
    console.log('User Input:',userInput);

   const userPassword = PasswordRef.current.value;
   console.log('User Password:',userPassword);
  }

  return (
    <div>

      <h1 style={{marginRight:'50px'}}>User Form in React Js</h1>

      <form onSubmit={changeHandler} action={submitHandler}>
      <UserForm/>
      </form>
    </div>
  )
}
export default App;