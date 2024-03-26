/* eslint-disable react/prop-types */
import clsx from "clsx";
import { TrendingCategoryChip } from "./CategoryChip";
import { useGetTrendingCategoriesQuery } from "../api/challenges.api";
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from "../hooks/useAuth";


export const TrendingCategoriesBox = ({theme}) => {
    const {token} = useAuth()
    const {data, isLoading, isSuccess} = useGetTrendingCategoriesQuery(token)
    
    const isDark = theme != 'light'
    return (
        <div className={clsx(isDark ? 'dark': '', "text-black  p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
            <h2 className="text-2xl font-semibold mb-2">Trending Categories</h2>
            <div className="flex flex-wrap whitespace-nowrap max-h-200 overflow-scroll">
                {isLoading ? <div className="self-center"><CircularProgress /></div> : isSuccess ? data && data.data.map(({category, count}, idx) => {
                   return <TrendingCategoryChip key={idx} category={category} n_submissions={count}/>
                }) : <div className="text-red-500">Error loading</div>}
            </div>
        </div>
    );
};