/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import TopKIcon from "./Icons/TopKIcon";


export const TopKCoderCard = ({coder, rank}) => {
    const { firstName, lastName, avatarUrl, score } = coder;

    return (
        // TODO: Add link to user
        <Link className="flex w-full items-center p-2 bg-gray-100 rounded-lg shadow-md mb-2 text-black">
            <div className="mr-4">
                {avatarUrl ? (
                    <img src={avatarUrl} className="w-10 h-10 rounded-full" />
                ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                )}
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="flex gap-1 items-center">
                    <TopKIcon rank={rank}/>
                    <h3 className="text-lg font-semibold">{`${firstName} ${lastName}`}</h3>
                </div>
                <p className="text-gray-600">Score: {score}</p>
            </div>
        </Link>
    );
}

export const TopKCodersList = () => {
    const topk = [
        {
            id: 101,
            firstName: "Alice",
            lastName: "Johnson",
            avatarUrl: "",
            score: 350,
            rank: 1
        },
        {
            id: 102,
            firstName: "Bob",
            lastName: "Smith",
            avatarUrl: "",
            score: 320,
            rank: 2

        },
        {
            id: 103,
            firstName: "Emily",
            lastName: "Davis",
            avatarUrl: "",
            score: 290,
            rank: 3
        },
        {
            id: 104,
            firstName: "Michael",
            lastName: "Brown",
            avatarUrl: "",
            score: 270,
            rank: 4
        }
    ];
    
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md overflow-scroll">
            <h2 className="text-black text-2xl font-semibold mb-2">Top 4 coders</h2>
            <div className="flex flex-wrap max-h-96 overflow-scroll">
                {topk.map((coder, idx) => {
                    return <TopKCoderCard key={idx} coder={coder} rank={coder.rank}/>
                })}
            </div>
        </div>
    );
};