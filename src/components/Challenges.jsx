import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

import Tooltip from '@mui/material/Tooltip';
export const ChallengesList = () => {
    return (
        <div className="overflow-scroll shadow-md bg-gray-100 rounded-lg p-4">
            <table className="table-auto w-full text-gray-800">
                {/* head */}
                <thead className="bg-gray-200 text-center">
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
                    <tr className="border-b border-gray-300">
                        <td className="px-4 py-2 flex justify-center">
                            <Tooltip title={"Completed"}>
                                <span><BsCheck2Circle size={28}/></span>
                            </Tooltip>
                        </td>
                        {/* TODO: Chanege this to real id */}
                        <td><Link to={'/workspace/0'} className="px-4 py-2">Two-sum</Link></td>
                        <td className="px-4 py-2">Data structure</td>
                        <td className="px-4 py-2">
                            <span className="badge badge-success">Easy</span>
                        </td>
                        <td className="px-4 py-2">45%</td>
                    </tr>

                    {/* Add more rows as needed */}
                    <tr className="border-b border-gray-300">
                        <td className="px-4 py-2 flex justify-center">
                            <Tooltip title={"Attempted"}>
                                <span><LuFileSpreadsheet size={28} color={"#036bfc"}/></span>
                            </Tooltip>
                        </td>
                        <td className="px-4 py-2">Fibonatci series</td>
                        <td className="px-4 py-2">Data structure</td>
                        <td className="px-4 py-2">
                            <span className="badge badge-warning">Moderate</span>
                        </td>
                        <td className="px-4 py-2">45%</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                        <td className="px-4 py-2 flex justify-center">
                        <Tooltip title={"Not started"}>
                                <span><FaRegHourglass size={28} color={"#fc9003"}/></span>
                            </Tooltip>
                        </td>
                        <td className="px-4 py-2">Skyline Problem</td>
                        <td className="px-4 py-2">Data structure</td>
                        <td className="px-4 py-2">
                            <span className="badge badge-error">Hard</span>
                        </td>
                        <td className="px-4 py-2">45%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
