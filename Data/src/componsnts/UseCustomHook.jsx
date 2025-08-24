import React, { useState } from 'react'

const UseCustomHook = () => {

  const [data,setData] = useState(false);
  const isData = () => {
    setData(!data);
  }


  return {data,isData};
}

export default UseCustomHook
