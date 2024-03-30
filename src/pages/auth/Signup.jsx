import { useState } from 'react';
import codeImage from '../../assets/coding.png'
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../api/auth.api';
import Loading from '../../components/Loading';
import { useForm } from 'react-hook-form';

const SignupPage = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()


  const [signup] = useSignupMutation()
  const [signupStatus, setStatus] = useState({
    error: null,
    success: null,
    isLoading: false
  })


  const onSubmit = async (data) => {
    setStatus({
      error: null,
      isLoading: true,
    })
    try{
      
      const signupResult = await signup(data)
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
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="w-full max-h-3/4 max-w-md p-8 bg-white rounded shadow-md"
          >
          <h2 className="text-2xl font-semibold mb-8 text-textPrimary">Join Coders Now!</h2>
          <div className="mb-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              {...register('first_name', {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters long"
                },
              })}
            />
            <span className='text-red-500'>{errors.first_name?.message}</span>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              {...register('last_name', {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters long"
                },
              })}
            />
            <span className='text-red-500'>{errors.last_name?.message}</span>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              {...register('email', {
                required: true,
                minLength: {
                  value: 10,
                  message: "First name must be at least 10 characters long"
                },
              })}
            />
            <span className='text-red-500'>{errors.email?.message}</span>
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-3 px-4 block w-full text-white bg-mainBody border-gray-200 rounded-lg text-sm"
              {...register('password', {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "First name must be at least 8 characters long"
                },
              })}
              
            />
            <span className='text-red-500'>{errors.password?.message}</span>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
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
