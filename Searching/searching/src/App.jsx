import React, { useState } from 'react'

const App = () => {

  const [search,setSearch] = useState('');

   const users = [
    { id: 1, name: "Aarav", lastName: "Sharma", number: "9876543101" },
    { id: 2, name: "Vihaan", lastName: "Mehra", number: "9876543102" },
    { id: 3, name: "Aditya", lastName: "Verma", number: "9876543103" },
    { id: 4, name: "Vivaan", lastName: "Malhotra", number: "9876543104" },
    { id: 5, name: "Arjun", lastName: "Singh", number: "9876543105" },
    { id: 6, name: "Sai", lastName: "Reddy", number: "9876543106" },
    { id: 7, name: "Krishna", lastName: "Nair", number: "9876543107" },
    { id: 8, name: "Ishaan", lastName: "Kapoor", number: "9876543108" },
    { id: 9, name: "Kartik", lastName: "Deshmukh", number: "9876543109" },
    { id: 10, name: "Reyansh", lastName: "Joshi", number: "9876543110" },
  ];

  const filterdUser = users.filter(item=>{
    const fullName = `${item.name} ${item.lastName} ${item.number}`
    return fullName.toLowerCase().includes(search);
  })

  return (
    <div>

    <input 
    type="text" 
    placeholder='Search bar'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />

      <div>
        {
          filterdUser.length > 0 ? (
            filterdUser.map(item=>(
          <div>
            <p>{`${item.name} ${item.lastName}`}</p>
            <p>{`${item.number}`}</p>
          </div>
        ))
          ) : (
            <p>No Data Found</p>
          )
        }
      </div>
    </div>
  )
}

export default App
