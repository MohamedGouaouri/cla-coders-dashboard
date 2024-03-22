/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import clsx from "clsx";


export const TopKCoderCard = ({theme, coder}) => {
    const { firstName, lastName, avatarUrl, score } = coder;
    const isDark = theme != 'light'
    return (
        // TODO: Add link to user
        <Link className={clsx(isDark ? 'dark' : '', "flex w-full items-center p-2 bg-gray-100 rounded-lg shadow-md mb-2 text-black dark:bg-bgUserDark dark:text-white")}>
            <div className="mr-4">
                {avatarUrl ? (
                    <img src={avatarUrl} className="w-10 h-10 rounded-full" />
                ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                )}
            </div>
            <div className="flex w-full items-center justify-between">
                <h3 className="text-lg font-semibold">{`${firstName} ${lastName}`}</h3>
                <p className={clsx(isDark ? 'dark' : '', 'text-gray-600 dark:text-white')}>Score: {score}</p>
            </div>
        </Link>
    );
}

export const TopKCodersList = ({theme}) => {
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
    const isDark = theme != 'light'
    return (
        <div className={clsx(isDark ? 'dark': '', "text-black overflow-scroll p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
            <h2 className="text-2xl font-semibold mb-2">Top 4 coders</h2>
            <div className="flex flex-wrap max-h-96 overflow-scroll">
                {topk.map((coder, idx) => {
                    return <TopKCoderCard key={idx} coder={coder} rank={coder.rank} theme={theme}/>
                })}
            </div>
        </div>
    );
};