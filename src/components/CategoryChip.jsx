/* eslint-disable react/prop-types */

import { useGetCategoriesQuery } from "../api/challenges.api";
import useAuth from "../hooks/useAuth";


export const TrendingCategoryChip = ({category, n_submissions}) => {
    return <div className="flex items-center content-between gap-1 bg-gray-200 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 m-1 hover:bg-textPrimary hover:text-white hover:cursor-pointer">
        <span>
            {category}
        </span>
        <span className="badge badge-accent badge-sm text-xs">{n_submissions}</span>
    </div>
}

export const CategoryChip = ({ label }) => {
    return (
        <div className="bg-gray-200 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 m-1 hover:bg-textPrimary hover:text-white hover:cursor-pointer">
            {label}
        </div>
    );
};


export const CategoriesList = () => {
    const {token} = useAuth()
    const {data, isSuccess, isLoading, isError} = useGetCategoriesQuery(token)
    console.log(data)
    return (
        <div className="flex max-w-screen-md py-5 my-2 overflow-scroll whitespace-nowrap">
            {isLoading ? <>Loading</> : isSuccess ? data && data.data.map((cat, index) => (
        <CategoryChip key={index} label={cat} />
    )): isError ? <div>Error loading categories</div> : <></>}
        </div>
    );
};