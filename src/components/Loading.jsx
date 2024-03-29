import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p>Loading...</p>
        <CircularProgress />
    </div>
  )
}

export default Loading