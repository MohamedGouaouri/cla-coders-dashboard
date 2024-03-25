/* eslint-disable react/prop-types */

import { MdEdit } from "react-icons/md";

function ProfileForm({coder}) {
    const handleFileChange = () => {
      // Handle file change here
    }
  return (
    <>
        <div className="text-sm lg:grid-cols-4">
              <div className="flex justify-between items-center">
                <div className="mr-4 flex flex-col justify-center items-center">
                  <div className="relative">
                    {coder.avatarUrl ? (
                      <img src={coder.avatarUrl} className="w-40 h-40 rounded-full" alt="Avatar" />
                    ) : (
                      <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                    )}
                    <label htmlFor="file-upload" className="absolute right-3 bottom-4 cursor-pointer flex flex-col items-center justify-center rounded-md">
                      <MdEdit className="text-gray-400 text-3xl" />
                      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                  <h1 className="font-bold text-3xl">{coder.firstName} {coder.lastName}</h1>
                </div>
                <h1 className="font-bold text-3xl">Rank: {coder.rank}</h1>
              </div>
              </div>

              <div className="col-span-4 md:col-span-3">
                  <div className="">
                    <label className="text-start block" htmlFor="full_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="full_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                  </div>

                  <div className="">
                    <label className="text-start block" htmlFor="email">Tell us more about you</label>
                    <textarea className="textarea border h-50 mt-1 rounded px-4 w-full bg-white" placeholder="About"></textarea>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                    </div>
                  </div>
              </div>
    </>
  )
}

export default ProfileForm