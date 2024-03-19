import './App.css'
import SigninPage from './pages/auth/Signin';
import SignupPage from './pages/auth/Signup'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import Workspace from './pages/workspace/Workspace';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/challenges' element={<Home />}/>
        <Route path='/workspace/:id' element={<Workspace />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<SigninPage />}/>
      </Routes>
      
    </>
  )
}

export default App
