import clsx from "clsx";
import { ChipsList } from "../../components/CategoryChip";
import { ChallengesList } from "../../components/Challenges";
import { Navbar } from "../../components/Navbar"
import { TopKCodersList } from "../../components/Topk";
import { TrendingCategoriesBox } from "../../components/TrendingCategories";
import {useSelector } from 'react-redux'
export const Home = () => {
    const theme = useSelector(state => {
        return state.ui.theme
    })
    const isDark = theme != 'light'
    return (
        <div className="h-screen w-screen overflow-scroll">
            <Navbar />
            <div className={clsx(isDark ? 'dark':'', "p-2 w-full h-full text-black bg-slate-100 shadow-md dark:bg-bgMainDark dark:text-white")}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-full overflow-scroll">
                    <div className="md:col-span-3">
                        <h1 className="text-start text-5xl my-5">Challenges</h1>
                        <h3 className="text-start">Select category</h3>
                        <ChipsList />
                        <ChallengesList theme={theme}/>
                    </div>
                    <div className="md:col-span-1 flex flex-col gap-4 overflow-scroll">
                        <TrendingCategoriesBox theme={theme}/>
                        <TopKCodersList theme={theme}/>
                    </div>
                </div>
            </div>
        </div>
    );
};