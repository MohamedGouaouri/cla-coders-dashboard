/* eslint-disable react/prop-types */
import CircularProgress from '@mui/material/CircularProgress';

function Loading({message}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p>{message || `Loading...`}</p>
        <CircularProgress />
    </div>
  )
}

export default Loading