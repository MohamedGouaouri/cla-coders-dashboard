/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
import clsx from "clsx";
import useAuth from "../hooks/useAuth";
import { useGetTopKQuery } from "../api/grading.api";
import CircularProgress from '@mui/material/CircularProgress';



export const TopKCoderCard = ({theme, coder}) => {
    const { first_name, last_name, avatar_url, score } = coder;
    const isDark = theme != 'light'
    return (
        // TODO: Add link to user
        <div className={clsx(isDark ? 'dark' : '', "flex w-full items-center p-2 bg-gray-100 rounded-lg shadow-md mb-2 text-black dark:bg-bgUserDark dark:text-white")}>
            <div className="mr-4">
                {avatar_url ? (
                    <img src={avatar_url} className="w-10 h-10 rounded-full" />
                ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                )}
            </div>
            <div className="flex w-full items-center justify-between">
                <h3 className="text-lg font-semibold">{`${first_name} ${last_name}`}</h3>
                <p className={clsx(isDark ? 'dark' : '', 'text-gray-600 dark:text-white')}>Score: {score}</p>
            </div>
        </div>
    );
}

export const TopKCodersList = ({theme}) => {
    const {token} = useAuth()
    const {data, isLoading, isSuccess} = useGetTopKQuery(token)
    
    const isDark = theme != 'light'
    return (
        <div className={clsx(isDark ? 'dark': '', "text-black overflow-scroll p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
            <h2 className="text-2xl font-semibold mb-2">Top 4 coders</h2>
            <div className="flex flex-wrap max-h-96 overflow-scroll">
                {isLoading ? <div className="self-center"><CircularProgress /></div> : isSuccess ? data && data.data.map((coder, idx) => {
                    return <TopKCoderCard key={idx} coder={coder} theme={theme}/>
                }) : <div className="text-red-500">Error loading</div>}
            </div>
        </div>
    );
};