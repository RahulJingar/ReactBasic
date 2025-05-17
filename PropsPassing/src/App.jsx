import User from "./User";

const PropsPassing=()=>{
   const displayName = (name) => {
      alert(name);
      }

      const  getUser = (user) => {
        alert("Get User Called");
      }
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        gap:'15px',
        marginLeft:'630px',

      }}
    >

      <h1 style={{marginLeft:'25px'}}>check alert</h1>

      <User displayName={displayName} name="Rahul" getUser={getUser}/>
      <User displayName={displayName} name="Manish" getUser={getUser}/>
      <User displayName={displayName} name="Ashish" getUser={getUser}/>
      <User displayName={displayName} name="Jitesh" getUser={getUser}/>
      <User displayName={displayName} name="Kavish" getUser={getUser}/>
      <User displayName={displayName} name="Palkesh" getUser={getUser}/>

    </div>
  )
}
export default PropsPassing;