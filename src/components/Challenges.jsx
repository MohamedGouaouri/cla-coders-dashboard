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
                        <td className="px-4 py-2">
                            <span className="badge badge-success">Completed</span>
                        </td>
                        <td className="px-4 py-2">Zemlak, Daniel and Leannon</td>
                        <td className="px-4 py-2">Data structure</td>
                        <td className="px-4 py-2">
                            <span className="badge badge-error">Hard</span>
                        </td>
                        <td className="px-4 py-2">45%</td>
                    </tr>

                    {/* Add more rows as needed */}
                    <tr className="border-b border-gray-300">
                        <td className="px-4 py-2">
                            <span className="badge badge-info badge-md">Attempted</span>
                        </td>
                        <td className="px-4 py-2">Zemlak, Daniel and Leannon</td>
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
