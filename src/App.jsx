import './App.css'
import SigninPage from './pages/auth/Signin';
import SignupPage from './pages/auth/Signup'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import Workspace from './pages/workspace/Workspace';
import Leaderboard from './pages/leaderboard/Leaderboard';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route path='/challenges' element={<Home />}/>
        </Route>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route path='/workspace/:id' element={<Workspace />}/>
        </Route>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route path='/leaderboard' element={<Leaderboard />}/>
        </Route>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile />}/>
        </Route>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<SigninPage />}/>
      </Routes>
      
    </>
  )
}

export default App
