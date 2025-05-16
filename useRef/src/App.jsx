import { useRef } from "react";

const App = () => {

  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.placeholder='enter password';
    inputRef.current.value=123;
  }

  const toggleHandler = () => {
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display='none'
    }else{
      inputRef.current.style.display='inline'
    }
  }

  const h1Handler = () => {
    h1Ref.current.style.color='red';
  }

  const RemoveHandler = () => {
    h1Ref.current.style.color='white'
  }

  return (
    <div>

      <h1>use to useRef</h1>

      <button onClick={toggleHandler}>Toggle</button>

      <input 
      type="text" 
      placeholder="enter the name"
      ref={inputRef}
      />

      <button onClick={inputHandler}>change the input feild</button>

      <h1 ref={h1Ref}>Hello Rahul!!</h1>

      <button onClick={h1Handler}>h1Handler</button>
      <button onClick={RemoveHandler}>RemoveHandler</button>

    </div>
  )
}

export default App;