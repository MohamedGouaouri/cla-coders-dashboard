import { useState } from 'react';
import codeImage from '../../assets/coding.png'
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../api/auth.api';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch} from 'react-redux'
import { loginAction } from '../../redux/slices/auth.slice';
import {useNavigate} from 'react-router-dom'

const SigninPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  
  const [loginStatus, setStatus] = useState({
    error: null,
    isLoading: false
  })
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
    setStatus({
      error: null,
      isLoading: true,
    })
    try{
      
      const loginResult = await login(formData)
      if(loginResult.error) {
        return setStatus({
          error: loginResult.error?.data?.message,
          isLoading: false,
        })
      }
      if (loginResult.data.status == 'success') {
        const {token} = loginResult.data
        if (!token) {
          setStatus({
            error: 'Token not present in response',
            isLoading: false,
          })
        }
        // dispatch auth
        setStatus({
          error: null,
          isLoading: false,
        })
        dispatch(loginAction({
          token
        }))
        navigate('/')
      }
    } catch(error) {
      return setStatus({
        error: error.message,
        isLoading: false,
      })
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-mainBody flex items-center justify-center">
        <img
          className="max-w-xs mx-auto"
          src={codeImage}
          alt="App Image"
          height={300}
          width={300}
        />
      </div>
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-h-3/4 max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-8 text-textPrimary">Join Coders Now!</h2>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Login
          </button>
          <div className='text-black'>New to CodeCLA. <Link to={"/signup"}>Signup</Link> </div>
          {loginStatus.isLoading ? <CircularProgress />: <></>}
          {loginStatus.error ? <span className='text-red-500'>Error while signing in: {`${loginStatus.error}`}</span> : <></>}
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
