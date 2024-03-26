/* eslint-disable react/prop-types */

import { challengesApi, useGetCategoriesQuery } from "../api/challenges.api";
import useAuth from "../hooks/useAuth";
import {useDispatch, useSelector} from 'react-redux'
import { selectCategoryAction } from "../redux/slices/ui.slice";
import clsx from "clsx";

export const TrendingCategoryChip = ({category, n_submissions}) => {

    return <div 
        
        className="flex items-center content-between gap-1 bg-gray-200 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 m-1 hover:bg-textPrimary hover:text-white hover:cursor-pointer">
        <span>
            {category}
        </span>
        <span className="badge badge-accent badge-sm text-xs">{n_submissions}</span>
    </div>
}

export const CategoryChip = ({ label }) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(state => state.ui.selectedCategory)
    const onChipClick = (category) => {
        dispatch(selectCategoryAction(category))
        dispatch(challengesApi.util.invalidateTags(['Challenges']))
    }
    return (
        <div
            onClick={() => onChipClick(label)} 
            className={clsx(selectedCategory === label ? 'text-white bg-textPrimary' : 'bg-gray-200 text-gray-700  hover:bg-textPrimary hover:text-white', "px-3 py-2 rounded-full text-sm font-semibold m-1 hover:cursor-pointer" )}>
            {label}
        </div>
    );
};


export const CategoriesList = () => {
    const {token} = useAuth()
    let {data, isSuccess, isLoading, isError} = useGetCategoriesQuery(token)

    return (
        <div className="flex max-w-screen-md py-5 my-2 overflow-scroll whitespace-nowrap">
            {isLoading ? <>Loading</> : isSuccess ? <>
                <CategoryChip label={'All'} />
                {
                    data && data.data.map((cat, index) => (
                        <CategoryChip key={index} label={cat} />
                        ))
                }
            </>: isError ? <div>Error loading categories</div> : <></>}
        </div>
    );
};