import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Api from './componsnts/Api'
import Data from './componsnts/Data';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Api/>}/>
          <Route path='/data/:id' element={<Data/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
