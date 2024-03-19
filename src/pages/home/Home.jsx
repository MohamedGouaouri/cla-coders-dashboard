import { ChipsList } from "../../components/CategoryChip";
import { ChallengesList } from "../../components/Challenges";
import { Navbar } from "../../components/Navbar"
import { TopKCodersList } from "../../components/Topk";
import { TrendingCategoriesBox } from "../../components/TrendingCategories";

export const Home = () => {

    const chips = ["All", "Data structure", "Graphs", "Databases", "All", "Data structure", "Graphs", "Databases", "All", "Data structure", "Graphs", "Databases"]; // Example chips data
    return (
        <div className="h-screen w-screen overflow-scroll bg-slate-100">
            <Navbar />
            <div className="p-2">
                
                <div className="grid grid-cols-4 gap-2 h-full overflow-scroll">
                    <div className="col-span-3">
                    <h1 className="text-black text-start text-5xl my-5">Challenges</h1>
                    <h3 className="text-black text-start">Select category</h3>
                    <ChipsList categories={chips} />
                        <ChallengesList />
                    </div>
                    <div className="flex flex-col gap-4 bg-gray-100">
                        <TrendingCategoriesBox />
                        <TopKCodersList />
                    </div>
                </div>
                {/* <Workspace challenge={challenges[0]}/> */}
            </div>
        </div>
    );
};