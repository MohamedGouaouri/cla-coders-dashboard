/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export const TopKCoderCard = ({coder}) => {
    const { firstName, lastName, avatarUrl, score } = coder;

    return (
        // TODO: Add link to user
        <Link className="flex w-full items-center p-2 bg-gray-100 rounded-lg shadow-md mb-2 text-black">
            <div className="mr-4">
                {avatarUrl ? (
                    <img src={avatarUrl} alt={`${firstName} ${lastName}`} className="w-10 h-10 rounded-full" />
                ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                )}
            </div>
            <div className="flex w-full items-center justify-between">
                <h3 className="text-lg font-semibold">{`${firstName} ${lastName}`}</h3>
                <p className="text-gray-600">Score: {score}</p>
            </div>
        </Link>
    );
}

export const TopKCodersList = () => {
    const topk = [{
        id: 123,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        avatarUrl: "",
        score: 200,
    },
    {
        id: 1234,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },{
        id: 12345,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },{
        id: 123456,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },
    {
        id: 123456,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },{
        id: 123456,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },
    {
        id: 123456,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },
    {
        id: 123456,
        firstName: "Mohammed",
        lastName: 'Gouaouri',
        score: 200,
    },
   
]
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md overflow-scroll">
            <h2 className="text-black text-2xl font-semibold mb-2">Top 4 coders</h2>
            <div className="flex flex-wrap max-h-96 overflow-scroll">
                {topk.map((coder, idx) => {
                    return <TopKCoderCard key={idx} coder={coder}/>
                })}
            </div>
        </div>
    );
};