import { useActionState } from "react";

const App =() => {

    const submitHandler = async(previousData, formData) => {
      let name = formData.get('name');
      let password = formData.get('password');
      await new Promise(res=>setTimeout(res,2000))
      console.log(submitHandler,name,password)

      if(name && password){
        return {message: "Data Submitted",name,password}
      }else{
        return {error:"Failed to Submit, Enter proper data",name,password}
      }
    }

    const [data,action,pending] = useActionState(submitHandler, undefined)
    console.log(data)
  return (
    <div >
      <h1 style={{marginLeft:'450px'}}>use to useActivationState in React</h1>
      <div style={{marginLeft:'700px'}}>
      <form action={action}>
          <input 
        type="text" 
        placeholder="Enter Name"
        name="name"
        style={{height:'25px',width:'200px'}}
        />
        <br /><br />


        <input 
        type="password" 
        placeholder="Enter Password"
        name="password"
        style={{height:'25px',width:'200px'}}
        />
        <br /><br />


        <button style={{marginLeft:'50px'}} disabled={pending}>{pending ? "Submitting...":"Submit"}</button>
      <br />

      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }


      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }

        <h3>Name:{data?.name}</h3>
        <h3>Password:{data?.password}</h3>

      </form>

     
      </div>
    </div>
  )
}
export default App;