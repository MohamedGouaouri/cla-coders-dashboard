// import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useSelector } from 'react-redux';
import clsx from "clsx";
import { useGetLeaderboardQuery } from "../../api/grading.api";
import useAuth from "../../hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';

function Leaderboard() {

  // TODO: Handle load data

  const theme = useSelector(state => {
    return state.ui.theme
  })
  const isDark = theme !== 'light';

  const {token} = useAuth()
  const {data, isLoading, isSuccess} = useGetLeaderboardQuery(token)

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
                    {isLoading ? <tr>
                        <td colSpan="5" className="px-4 py-2 m-auto">
                            <CircularProgress />
                        </td>
                    </tr>
                    : isSuccess ? 
                    data.data.map((coder, idx) => {
                        return <tr 
                            key={idx}
                            className="border-b border-gray-300">
                            <td className="px-4 py-2 flex justify-center">
                                {coder.rank}
                            </td>
                            <td><div className="px-4 py-2">{coder.first_name} {coder.last_name}</div></td>
                            <td className="px-4 py-2">{coder.score}</td>
                            <td className="px-4 py-2">{coder.solved_challenges}</td>
                        </tr>
                    }) : <tr>
                        
                        <td colSpan="5" className="px-4 py-2 m-auto text-red-500">
                            Error loading data
                        </td>
                </tr>}
                </tbody>
          </table>
          
      </div>

    </div>
    
  );
}

export default Leaderboard;
