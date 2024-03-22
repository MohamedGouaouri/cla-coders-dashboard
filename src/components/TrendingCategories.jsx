/* eslint-disable react/prop-types */
import clsx from "clsx";
import { TrendingCategoryChip } from "./CategoryChip";


export const TrendingCategoriesBox = ({theme}) => {
    const trends = [{
        category: "Graphs",
        n_submissions: 100,
    },
    {
        category: "Stacks",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 20,
    },
    {
        category: "Databases",
        n_submissions: 3,
    },
]
    const isDark = theme != 'light'
    return (
        <div className={clsx(isDark ? 'dark': '', "text-black  p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
            <h2 className="text-2xl font-semibold mb-2">Trending Categories</h2>
            <div className="flex flex-wrap whitespace-nowrap max-h-200 overflow-scroll">
                {trends.map(({category, n_submissions}, idx) => {
                    return <TrendingCategoryChip key={idx} category={category} n_submissions={n_submissions}/>
                })}
            </div>
        </div>
    );
};