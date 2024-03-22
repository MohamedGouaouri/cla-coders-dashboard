/* eslint-disable react/prop-types */

import { useGetCategoriesQuery } from "../api/coders.api";


export const TrendingCategoryChip = ({category, n_submissions}) => {
    return <div className="flex items-center content-between gap-1 bg-gray-200 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 m-1 hover:bg-textPrimary hover:text-white hover:cursor-pointer">
        <span>
            {category}
        </span>
        <span className="badge badge-accent badge-sm text-xs">{n_submissions}</span>
    </div>
}

export const Chip = ({ label }) => {
    return (
        <div className="bg-gray-200 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 m-1 hover:bg-textPrimary hover:text-white hover:cursor-pointer">
            {label}
        </div>
    );
};


export const ChipsList = () => {
    const {data} = useGetCategoriesQuery()
    return (
        <div className="flex max-w-screen-md py-5 my-2 overflow-scroll whitespace-nowrap">
            {data && data.map((chip, index) => (
                <Chip key={index} label={chip.name} />
            ))}
        </div>
    );
};