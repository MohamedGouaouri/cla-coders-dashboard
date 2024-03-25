import { Navbar } from "../../components/Navbar";

import CoderHeatMap from "../../components/CoderHeatMap";
import CoderStats from "../../components/CoderStats";
import ProfileForm from "../../components/ProfileForm";
import {useSelector } from 'react-redux'
import clsx from "clsx";



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

  const theme = useSelector(state => {
    return state.ui.theme
})
const isDark = theme != 'light'

  return (
    <div className={clsx(isDark ? 'dark':'', "w-screen h-screen text-black bg-slate-100  dark:bg-bgMainDark dark:text-white")}>
        <Navbar />
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 bg-inherit">
          <div className="col-span-1 lg:col-span-2 p-4">
            <ProfileForm coder={coder}/>
          </div>
          <div className="col-span-1 lg:col-span-1 p-4 h-full flex flex-col gap-3">
            <CoderStats stats={{easy: 60, moderate: 20, hard: 2}} theme={theme}/>
            <CoderHeatMap values={values} theme={theme}/>
          </div>
        </div>
    </div>
  );
}

export default Profile