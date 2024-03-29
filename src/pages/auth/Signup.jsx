import { useState } from 'react';
import codeImage from '../../assets/coding.png'
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../api/auth.api';
import Loading from '../../components/Loading';

const SignupPage = () => {
  const [signup] = useSignupMutation()
  const [signupStatus, setStatus] = useState({
    error: null,
    success: null,
    isLoading: false
  })
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
      
      const signupResult = await signup(formData)
      if(signupResult.error) {
        console.log(signupResult.error)
        return setStatus({
          error: signupResult.error?.data?.message || 'Error while registering a new user',
          isLoading: false,
        })
      }
      if (signupResult.data.status == 'success') {
        return setStatus({
          error: null,
          isLoading: false,
          success: true,
        })
      }
    } catch(error) {
      console.log(error)
      return setStatus({
        error: 'Error while registering a new user',
        isLoading: false,
        success: null,
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
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              required
            />
          </div>
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
              minLength={8}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Sign Up
          </button>
          <div className='text-black'>Already have an account?. <Link to='/login' className='text-textPrimary'>Login</Link> </div>
          {signupStatus.isLoading ? <Loading />: <></>}
          {signupStatus.error ? <span className='text-red-500'>{`${signupStatus.error}`}</span> : <></>}
          {signupStatus.success ? <span className='text-green-500'>Signup success</span> : <></>}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
