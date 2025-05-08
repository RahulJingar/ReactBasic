import User from "./User"

const App = () => {

  const Data = 
  [
    {
      id:1,
      name:"Rahul",
      email:"rjingarnsd@gmail.com",
      gender:"male",
      city:"jaipur",
    },

    {
      id:2,
      name:"Manish",
      email:"manish@gmail.com",
      gender:"male",
      city:"nasirabad",
    },

    {
      id:3,
      name:"Ashish",
      email:"ashish@gmail.com",
      gender:"male",
      city:"ajmer",
    },

    {
      id:4,
      name:"Jitesh",
      email:"jitesh@gmail.com",
      gender:"male",
      city:"nasirabad",
    },

    {
      id:5,
      name:"Kavish",
      email:"kavish@gmail.com",
      gender:"male",
      city:"nasirabad",
    },

    {
      id:6,
      name:"Palkesh",
      email:"palkesh@gmail.com",
      gender:"male",
      city:"nasirabad",
    },
  ]

  return (
    <div>
      {
        Data.map((item)=>(
         <div key="id">
          <User user={item}/>
         </div>
        ))
      }
    </div>
  )
}

export default App