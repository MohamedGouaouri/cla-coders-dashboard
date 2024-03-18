import { TrendingCategoryChip } from "./CategoryChip";


export const TrendingCategoriesBox = () => {
    const trends = [{
        category: "Graphs",
        n_submissions: 45,
    },
    {
        category: "Stacks",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "2",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },
    {
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },{
        category: "Algorthims",
        n_submissions: 45,
    },
]
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-black text-2xl font-semibold mb-2">Trending Categories</h2>
            <div className="flex flex-wrap h-200 overflow-scroll">
                {trends.map(({category, n_submissions}, idx) => {
                    return <TrendingCategoryChip key={idx} category={category} n_submissions={n_submissions}/>
                })}
            </div>
        </div>
    );
};