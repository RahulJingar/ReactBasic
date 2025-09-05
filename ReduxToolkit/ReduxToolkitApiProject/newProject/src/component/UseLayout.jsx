import React, { useState } from 'react'

const UseLayout = () => {

  const [change,setChange] = useState(false);

  const toggleHandle = () => {
    setChange(!change);
  }

  return {change, toggleHandle};
}

export default UseLayout




