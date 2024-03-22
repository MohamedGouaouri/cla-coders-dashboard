import { Navbar } from "../../components/Navbar";

import CoderHeatMap from "../../components/CoderHeatMap";
import CoderStats from "../../components/CoderStats";
import ProfileForm from "../../components/ProfileForm";



function Profile() {


  const values = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
  ];
  const coder = {
    firstName: 'Omar',
    lastName: 'Moukhfi',
    rank: 12,
    avatarUrl: "",
  }

  return (
    <div className="h-screen overflow-scroll bg-slate-100">
        <Navbar />
        <div className="w-full h-full text-black grid grid-cols-1 lg:grid-cols-3">

          <div className="col-span-1 lg:col-span-2 p-4 h-full">
            <ProfileForm coder={coder}/>
          </div>
          <div className="col-span-1 lg:col-span-1 p-4 h-full">
            <CoderStats stats={{easy: 60, moderate: 20, hard: 2}}/>
            <CoderHeatMap values={values}/>
          </div>
        </div>
    </div>
  );
}

export default Profile