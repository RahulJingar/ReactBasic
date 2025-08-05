import React, { useState } from 'react'

const App = () => {

  const [search,setSearch] = useState('');

  const data = [
    {id: 1, name: "rahul",lastName: "jingar",number: 7297998875},
    {id: 2, name: "yashu",lastName: "sharma",number: 9928057119},
    {id: 3, name: "jitesh",lastName: "dabi",number: 7297997485},
    {id: 4, name: "arun",lastName: "sankhla",number: 4152639874},
    {id: 9, name: "vivek",lastName: "sisodiya",number: 7297995157},
    {id: 6, name: "sudarshan",lastName: "udawat",number: 7852696366},
    {id: 7, name: "priansh",lastName: "rastogi",number: 7285412875},
    {id: 8, name: "divya",lastName: "rochani",number: 7545455875},
    {id: 5, name: "rahul",lastName: "nama",number: 7745154875},
    {id: 10, name: "saloni",lastName: "kumari",number: 7275457875},
    {id: 11, name: "krishna",lastName: "soni",number: 7245484875},
  ];

  const filterdUser = data.filter((item)=>{
    const fullName = `${item.id} ${item.name} ${item.lastName} ${item.number}`
   return fullName.toLowerCase().includes(search);
  })

  const user = filterdUser.sort((a,b) => a.id-b.id)

  console.log(`>>>>>>>>user>>`,user)




  return (
  <div>

    <div>
      <input 
      type="text" 
      placeholder='Search Bar'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    </div>

      <div>
      {filterdUser.length > 0 ? 
      (
        filterdUser.map((item)=>(
        <div>
          <p>{`${item.name} ${item.lastName}`}</p>
          <p>{`${item.number}`}</p>
        </div>
      ))
      ) : (
        <p>Data Not Found</p>
      ) 
    }
    </div>
  </div>
  )
}

export default App
