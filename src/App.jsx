import './App.css'
import SigninPage from './pages/auth/Signin';
import SignupPage from './pages/auth/Signup'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignupPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<SigninPage />}/>
      </Routes>
    </>
  )
}

export default App
