/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useUpdateProfileMutation } from "../api/coders.api";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import ErrorComponent from "./Error";
import withTimeout from "./WithTimout";

function ProfileForm({coder}) {
  const {token} = useAuth()
  const [uploadedAvatar, setUploadedAvatar] = useState(null)
  const [updateProfile] = useUpdateProfileMutation()
  const [updateStatus, setStatus] = useState({
    error: null,
    isLoading: false,
    data: null,
  })
  const avatar = uploadedAvatar == null ? coder.avatar_url : URL.createObjectURL(uploadedAvatar)
  const [formData, setFormData] = useState({
    first_name: coder.first_name,
    last_name: coder.last_name,
    about: coder.about,
  });
    const handleFileChange = (event) => {
      setUploadedAvatar(event.target.files[0])
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    }

    const handleSubmit = async () => {
      const fd = new FormData()
      fd.append('avatar', uploadedAvatar)
      for (const key of Object.keys(formData)) {
        fd.append(key, formData[key])
      }
      setStatus({
        ...updateStatus,
        isLoading: true,
      })
      
      try{
      
        const updateResult = await updateProfile({
          token,
          data: fd
        })
        if(updateResult.error) {
          return setStatus({
            error: 'Error while updating profile',
            isLoading: false,
          })
        }
        if (updateResult.data.status == 'success') {
          // dispatch auth
          setStatus({
            error: null,
            isLoading: false,
            data: 'Profile updated successfully'
          })
        }
      } catch(error) {
        return setStatus({
          error: error.message,
          isLoading: false,
        })
      }
    }
  return (
    <>
        <div className="text-sm lg:grid-cols-4">
              <div className="flex justify-between items-center">
                <div className="mr-4 flex flex-col justify-center items-center">
                  <div className="relative">
                    {avatar ? (
                      <img src={avatar} className="w-40 h-40 rounded-full" alt="Avatar" />
                    ) : (
                      <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                    )}
                    <label htmlFor="file-upload" className="absolute right-3 bottom-4 cursor-pointer flex flex-col items-center justify-center rounded-md">
                      <MdEdit className="text-mainBody text-3xl" />
                      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                  <h1 className="font-bold text-3xl">{coder.first_name} {coder.last_name}</h1>
                </div>
                <h1 className="font-bold text-3xl">Rank: {coder.rank}</h1>
              </div>
              </div>

              <div className="col-span-4 md:col-span-3 my-4">
                  <div className="">
                    <label className="text-start block" htmlFor="full_name">First Name</label>
                    <input 
                      type="text" 
                      name="first_name" 
                      id="first_name" 
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                      value={formData.first_name} 
                      onChange={handleFormChange}  
                    />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="full_name">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name" 
                      id="last_name" 
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                      value={formData.last_name}
                      onChange={handleFormChange}  

                    />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="email">Email Address</label>
                    <input 
                      type="text" 
                      name="email" 
                      id="email"
                      readOnly
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                      value={coder.email} 
                      placeholder="email@domain.com" />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="email">Tell us more about you</label>
                    <textarea 
                      className="textarea border h-50 mt-1 rounded px-4 w-full bg-white" 
                      placeholder="About"
                      value={formData.about}
                      name="about"
                      onChange={handleFormChange}  
                    ></textarea>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-end">
                      <button 
                        onClick={() => handleSubmit()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  {updateStatus.isLoading ? <Loading /> : updateStatus.error ? <ErrorComponent message={updateStatus.error}/> : 
                  
                  updateStatus.data && <FadingSuccessMessage message={updateStatus.data}/>
                  }
              </div>
    </>
  )
}

const FadingSuccessMessage = withTimeout(
  ({message}) => <div className="text-green-400">{message}</div>,
  2000
);

export default ProfileForm