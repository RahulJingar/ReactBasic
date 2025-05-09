import Student from "./Student";

const College=({college})=>{
    return (
        <div
        style={{
            backgroundColor:"gray",
            padding:"20px",
            borderBottom:"2px solid #000",
            margin:"20px",
            borderRadius:"10px"
        }}
        >
         
          <h1>Name: {college.name}</h1>

            <ul>
              <li>
                <h3>City: {college.city}</h3>
              </li>

              <li>
                <h3>Website: {college.website}</h3>
              </li>
                <Student student={college.student}/>
            </ul>

        </div>
    )
}

export default College;