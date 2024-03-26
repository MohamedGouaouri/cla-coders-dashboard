/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetChallengesQuery } from "../api/challenges.api";
import clsx from "clsx";
import useAuth from "../hooks/useAuth";
import {useSelector} from 'react-redux';

export const ChallengesList = ({theme}) => {
    const isDark = theme != 'light'
    const {token} = useAuth()
    const selectedCategory = useSelector(state => state.ui.selectedCategory)
    console.log(selectedCategory)
    let {data, isLoading, isSuccess} = useGetChallengesQuery({
        token, 
        selectedCategory
    })
    
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
                    {isLoading ? <tr>
                        
                        <td colSpan="5" className="px-4 py-2 m-auto">
                            <CircularProgress />
                        </td>
                    </tr>
                    : isSuccess ? 
                    data.data.map((challenge, idx) => {
                        const difficultyBadgeStyle = clsx('badge', challenge.level == 'Easy' ? 'badge-success' : challenge.level == 'Moderate' ? 'badge-warning': 'badge-error')
                        return <tr 
                                key={challenge.id || idx}
                                className="border-b border-gray-300">
                                <td className="px-4 py-2 flex justify-center">
                                    <Tooltip title={challenge.status}>
                                        <span>{challenge.status == 'Completed' ? <BsCheck2Circle size={28} color="#2aeb34"/> : challenge.status == 'Attempted' ? <LuFileSpreadsheet size={28} color={"#036bfc"}/> : <FaRegHourglass size={28} color={"#fc9003"}/>}</span>
                                    </Tooltip>
                                </td>
                                <td><Link to={`/workspace/${challenge._id}`} className="px-4 py-2">{challenge.title}</Link></td>
                                <td className="px-4 py-2">{challenge.category}</td>
                                <td className="px-4 py-2">
                                    <span className={difficultyBadgeStyle}>{challenge.level}</span>
                                </td>
                                <td className="px-4 py-2">{challenge.solution_rate}</td>
                            </tr>
                    }) : <tr>
                        
                        <td colSpan="5" className="px-4 py-2 m-auto text-red-500">
                            Error loading data
                        </td>
                </tr>}
                </tbody>
            </table>
        </div>
    );
};
