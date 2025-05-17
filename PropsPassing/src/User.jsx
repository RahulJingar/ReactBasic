const User=({displayName,name,getUser})=>{



    return (
        <div style={{marginLeft:'45px'}}>
      <button style={{marginRight:'15px'}} onClick={()=>displayName(name)}>Click Me!!</button>
      <button onClick={()=>getUser()}>GetUser</button>

        </div>
    )
}
export default User