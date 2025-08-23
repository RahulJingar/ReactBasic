import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

 const isLoggedIn = JSON.parse(localStorage.getItem('user'));
 if(!isLoggedIn){
  return <Navigate to={'/'}/>
 }

  return children

}

export default ProtectedRoute;
