import React from 'react'
import { useState } from 'react'

const UseCustomHook = () => {

  const [Dark,setDark] = useState(false);

  const isDark = () => {
    setDark(!Dark);
  }

  return {Dark,isDark};
}

export default UseCustomHook
