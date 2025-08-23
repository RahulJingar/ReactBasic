import React from 'react'
import FetchData from './Utils/FetchData'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/fetch' element={
            <ProtectedRoute>
              <FetchData/>
            </ProtectedRoute>
            }/>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
