/* eslint-disable react/prop-types */


function ErrorComponent({message}) {
  return (
    <div className="text-red-500">{message}</div>
  )
}

export default ErrorComponent