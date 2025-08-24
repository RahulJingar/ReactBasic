import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UseCustomHook from './UseCustomHook';

const Data = () => {
  const { id } = useParams(); 
  const [index, setIndex] = useState(null);
  const [show,setShow] = useState(false);
  const {data,isData} = UseCustomHook();

  const axiosIndex = async () => {
      const fetchIndex = await axios.get(`https://dummyjson.com/posts/${id}`);
      setIndex(fetchIndex.data);
      console.log(`>>>>fetchIndex>>>>>>>`, fetchIndex.data);
  }

  useEffect(() => {
    axiosIndex();
  }, [id]); 

  return (
    <div className={data ? "bg-black text-white":"bg-white"}>
        <div className='min-h-screen'>
        <button onClick={isData}>{data ? "Dark Mode🌙":"Light Mode☀️"}</button>
      {index ? (
        <div>
          <h1>{index.tags.join()}</h1>
          <p>{`reaction likes: ${index.reactions.likes} dislikes: ${index.reactions.dislikes}`}</p>
          <p>{`Views: ${index.views}`}</p>
          <button onClick={()=>setShow(!show)}>{show? "Hide Data":"Show Data"}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {show && (
        <div>
          <h3>{`userId: ${index.userId}`}</h3>
          <h3>{`Id: ${index.id}`}</h3>
          <p>{`Title: ${index.title}`}</p>
          <p>{`Body: ${index.body}`}</p>
          <p>{`Tags: ${index.tags.join()}`}</p>
           <p>{`reaction likes: ${index.reactions.likes} dislikes: ${index.reactions.dislikes}`}</p>
          <p>{`Views: ${index.views}`}</p>
        </div>
      )}
    </div>
      </div>
  );
}

export default Data;
