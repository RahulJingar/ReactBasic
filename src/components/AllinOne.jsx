import React from 'react'
import Home from './Home'
import About from './About'
import AllApp from './AllApp'
import InputField from './InputField'
import AllProjectAdd from './AllProjectAdd'
import Data from './Data'

const AllinOne = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Data/>
      {/* <AllApp/> */}
      <InputField/>
    </div>
  )
}

export default AllinOne
