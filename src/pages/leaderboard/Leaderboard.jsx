import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useSelector } from 'react-redux';
import clsx from "clsx";

function Leaderboard() {

  // TODO: Handle load data

  const theme = useSelector(state => {
    return state.ui.theme
  })
  const isDark = theme !== 'light';

  return (
    <div className="h-screen w-screen overflow-scroll">
        <Navbar />
        <div 
          className={clsx(isDark ? 'dark':'', "p-2 w-full h-full text-black bg-slate-100  dark:bg-bgMainDark dark:text-white")}>
          <h1 className="text-inherit text-start font-bold text-3xl my-4">Leaderboard</h1>

          <table className="table-auto w-full dark:bg-bgCardDark shadow-md rounded-md">
              {/* head */}
              <thead className="text-inherit text-center">
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
                      <td><Link to={'/workspace/0'} className="px-4 py-2">John Doe</Link></td>
                      <td className="px-4 py-2">400</td>
                      <td className="px-4 py-2">150</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                      <td className="px-4 py-2 flex justify-center">
                          2
                      </td>
                      <td><Link to={'/workspace/1'} className="px-4 py-2">Alice Smith</Link></td>
                      <td className="px-4 py-2">350</td>
                      <td className="px-4 py-2">140</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                      <td className="px-4 py-2 flex justify-center">
                          3
                      </td>
                      <td><Link to={'/workspace/2'} className="px-4 py-2">Emma Johnson</Link></td>
                      <td className="px-4 py-2">320</td>
                      <td className="px-4 py-2">135</td>
                  </tr>
              </tbody>
          </table>
          
      </div>

    </div>
    
  );
}

export default Leaderboard;
