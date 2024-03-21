import { Navbar } from "../../components/Navbar";
import { MdEdit } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import HeatMap from '@uiw/react-heat-map';
function Profile() {
  const avatarUrl = ""
  const handleFileChange = () => {
    // Handle file change here
  }

  const value = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
  ];

  return (
    <div className="h-screen overflow-scroll bg-slate-100">
      <Navbar />
        <div className="w-full h-full text-black grid grid-cols-1 md:grid-cols-3">

          <div className="md:col-span-2 p-4 h-full">
            <div className="h-fullgrid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-4">
              <div className="flex justify-between items-center">
                <div className="mr-4 flex flex-col ">
                  <div className="relative">
                    {avatarUrl ? (
                      <img src={avatarUrl} className="w-40 h-40 rounded-full" alt="Avatar" />
                    ) : (
                      <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                    )}
                    <label htmlFor="file-upload" className="absolute right-3 bottom-4 cursor-pointer flex flex-col items-center justify-center rounded-md">
                      <MdEdit className="text-gray-400 text-3xl" />
                      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                  <h1>Omar Moukhfi</h1>
                </div>

                <h1>Rank 1455</h1>
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
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
              </div>
          </div>
          <div className="md:col-span-1 p-4 h-full">
            <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-2">
              <h1 className="text-3xl">Completed challenges</h1>
              <div>
                <p>Easy: 60/100</p>
                <ProgressBar completed={60} bgColor="#46eb6f" />
              </div>
              <div>
                <p>Moderate: 20/100</p>
                <ProgressBar completed={20} bgColor="#f0b326" />
              </div>
              <div>
                <p>Hard: 1/100</p>
                <ProgressBar completed={1} bgColor="#f04826" />
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-lg shadow-md mb-2">
              <h1 className="text-3xl my-2">Coding combos!</h1>
              <HeatMap
                value={value}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri ', '']}
                startDate={new Date('2016/01/01')} // Start date will be today - year
                style={{width: '100%'}}
                // color="#8053FF"
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Profile