import './App.css'
import { useGetCodersQuery, useLoginMutation } from './api/coders.api';
import SigninPage from './pages/auth/Signin';
import SignupPage from './pages/auth/Signup'
import { Routes, Route } from "react-router-dom";


function Home() {
  let { data, error, isLoading, refetch } = useGetCodersQuery()
  const [login, result] = useLoginMutation()
  const handleClick = async () => {
    await refetch()
  }


  const handleLogin = async () => {
    const data = await login({
      username: 'Mohammed',
      password: '123456'
    })
    console.log(data)
  }

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.data ? (
        <>
          {data.data.map((user) => {
            return <div key={user._id}>{user.name}</div>
          })}
          <button onClick={handleClick}>Load users</button>
          <button onClick={handleLogin}>Login</button>
        </>
      ) : null}
    </div>
  )
}
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<SigninPage />}/>
      </Routes>
    </>
  )
}

export default App
