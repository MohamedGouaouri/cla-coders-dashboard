/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

import Tooltip from '@mui/material/Tooltip';
import { useGetChallengesQuery } from "../api/coders.api";
import clsx from "clsx";
export const ChallengesList = ({theme}) => {
    const {data} = useGetChallengesQuery()
    const isDark = theme != 'light'
    return (
        <div className={clsx(isDark ? 'dark': '', "text-black overflow-scroll shadow-md bg-inherit rounded-lg p-4 text-inherit dark:bg-bgCardDark dark:text-white")}>
            <table className="table-auto w-full">
                {/* head */}
                <thead className="bg-inherit text-center">
                    <tr>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Difficulty</th>
                        <th className="px-4 py-2">Solution Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {data && data.map((challenge, idx) => {
                        const difficultyBadgeStyle = clsx('badge', challenge.difficulty == 'Easy' ? 'badge-success' : challenge.difficulty == 'Moderate' ? 'badge-warning': 'badge-error')
                        return <tr 
                                key={challenge.id || idx}
                                className="border-b border-gray-300">
                                <td className="px-4 py-2 flex justify-center">
                                    <Tooltip title={challenge.status}>
                                        <span>{challenge.status == 'Completed' ? <BsCheck2Circle size={28} color="#2aeb34"/> : challenge.status == 'Attempted' ? <LuFileSpreadsheet size={28} color={"#036bfc"}/> : <FaRegHourglass size={28} color={"#fc9003"}/>}</span>
                                    </Tooltip>
                                </td>
                                <td><Link to={`/workspace/${challenge.id}`} className="px-4 py-2">{challenge.title}</Link></td>
                                <td className="px-4 py-2">{challenge.category}</td>
                                <td className="px-4 py-2">
                                    <span className={difficultyBadgeStyle}>{challenge.difficulty}</span>
                                </td>
                                <td className="px-4 py-2">${challenge.solutionRate}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};
