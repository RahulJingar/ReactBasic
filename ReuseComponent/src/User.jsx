function User({user}){
    return (
        <div
        style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:'800px',
            marginTop:"50px",
            borderRadius:"10px"
        }}
        >
            <h1 style={{color:'green'}}><span>{user.id}</span></h1>
            <h1 style={{color:'green'}}><span>{user.name}</span></h1>
            <h1 style={{color:'green'}}><span>{user.gender}</span></h1>
            <h1 style={{color:'green'}}><span>{user.email}</span></h1>
            <h1 style={{color:'green'}}><span>{user.city}</span></h1>
           
        </div>
    )
}

export default User;