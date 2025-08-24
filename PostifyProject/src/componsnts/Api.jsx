import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseCustomHook from './UseCustomHook';

const Api = () => {

  const [user,setUser] = useState([]);
  const navigate = useNavigate();
  const {data,isData} = UseCustomHook();

  const axiosData = async () => {
    const fetchData = await axios.get(`https://dummyjson.com/posts`);
    setUser(fetchData.data.posts);
    console.log(`>>>>>>>>fetchData>>>>>`,fetchData.data.posts);
  }

  useEffect(()=>{
    axiosData();
  },[]);

  return (
    <div>
      {/* api data on Ui */}
      {user.map((item)=>(
      
       <div className={data ? "bg-black text-white":"bg-white"}>
        <div className='min-h-screen'>
        <button onClick={isData}>{data ? "Dark Mode🌙":"Light Mode☀️"}</button>
        <h3>{`Id: ${item.id}`}</h3>
        <h3>{`Title: ${item.title}`}</h3>
        <h3>{`Body: ${item.body}`}</h3>
        <button onClick={()=>navigate(`/data/${item.id}`)}>View</button>
      </div>
      </div>
      ))}
    </div>
  )
}

export default Api
