import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";

function Leaderboard() {

  // TODO: Handle load data

  const [page, setPage] = useState(1)
  const handleNextPage = () => {
    setPage(page+1) // TODO: Handle page < maxPages
  }
  const handlePrevPage = () => {
    page > 1 && setPage(page-1)
  }
  return (
    <div className="h-screen w-screen overflow-scroll bg-slate-100">
        <Navbar />
        <div className="overflow-scroll shadow-md bg-gray-100 rounded-lg p-4">
          <h1 className="text-black text-start font-bold text-3xl my-4">Leaderboard</h1>
          <table className="table-auto w-full text-gray-800">
              {/* head */}
              <thead className="bg-gray-200 text-center">
                  <tr>
                      <th className="px-4 py-2">Rank</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Score</th>
                      <th className="px-4 py-2">Solved challenges</th>
                  </tr>
              </thead>
              <tbody>
                  {/* rows */}
                  <tr className="border-b border-gray-300">
                      <td className="px-4 py-2 flex justify-center">
                          1
                      </td>
                      {/* TODO: Chanege this to real id */}
                      <td><Link to={'/workspace/0'} className="px-4 py-2">Omar moukhfi</Link></td>
                      <td className="px-4 py-2">300</td>
                      <td className="px-4 py-2">140</td>
                  </tr>

                  {/* Add more rows as needed */}
                  <tr className="border-b border-gray-300">
                      <td className="px-4 py-2 flex justify-center">
                          1
                      </td>
                      {/* TODO: Chanege this to real id */}
                      <td><Link to={'/workspace/0'} className="px-4 py-2">Omar moukhfi</Link></td>
                      <td className="px-4 py-2">300</td>
                      <td className="px-4 py-2">140</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                      <td className="px-4 py-2 flex justify-center">
                          1
                      </td>
                      {/* TODO: Chanege this to real id */}
                      <td><Link to={'/workspace/0'} className="px-4 py-2">Omar moukhfi</Link></td>
                      <td className="px-4 py-2">300</td>
                      <td className="px-4 py-2">140</td>
                  </tr>
              </tbody>
          </table>
          
      </div>
      <div className="flex flex-row-reverse">
        <div className="join m-2">
              <button 
                onClick={handlePrevPage}
                className="join-item btn bg-slate-100 text-black hover:bg-textPrimary hover:text-white">«</button>
              <button className="join-item btn bg-slate-100 text-black hover:bg-textPrimary hover:text-white">Page {page}</button>
              <button 
                onClick={handleNextPage}
                className="join-item btn bg-slate-100 text-black hover:bg-textPrimary hover:text-white">»</button>
        </div>
      </div>
    </div>
    
);
}

export default Leaderboard