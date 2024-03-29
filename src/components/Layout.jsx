import React from 'react';
import { Navbar } from './Navbar';
import { useGetProfileQuery } from '../api/coders.api';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';
import ErrorComponent from './Error';

const Layout = ({ children }) => {
  const {token} = useAuth()
  const {data, isSuccess, isLoading, isError} = useGetProfileQuery(token)
  return (
    <div className="h-screen w-screen overflow-scroll">
      {isLoading ? <div className='bg-white text-textPrimary w-full h-full flex justify-center items-center'><Loading message={'We are setting things up for you...'} /></div> :
      isError ? <div className='bg-white w-full h-full flex justify-center items-center'><ErrorComponent message={'Error while loading data from the server'} /></div>
      : isSuccess && data && <>
        <Navbar coder={data.data}/>
        {children}
      </>
      }
    </div>
  );
};

export default Layout;