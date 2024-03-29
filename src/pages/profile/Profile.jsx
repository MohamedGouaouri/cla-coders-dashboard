import CoderHeatMap from "../../components/CoderHeatMap";
import CoderStats from "../../components/CoderStats";
import ProfileForm from "../../components/ProfileForm";
import {useSelector } from 'react-redux'
import clsx from "clsx";
import useAuth from "../../hooks/useAuth";
import { useGetProfileQuery } from "../../api/coders.api";
import Loading from "../../components/Loading";
import ErrorComponent from "../../components/Error";



function Profile() {

  const {token} = useAuth()
  const {data: profileData, isLoading: isProfileLoading , isSuccess: isProfileSuccess, isError: isProfileError} = useGetProfileQuery(token)

  const theme = useSelector(state => {
    return state.ui.theme
})
const isDark = theme != 'light'

  return (
    <div className={clsx(isDark ? 'dark':'', "w-full h-full text-black bg-slate-100  dark:bg-bgMainDark dark:text-white")}>
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 bg-inherit">
          <div className="col-span-1 lg:col-span-2 p-4">
            {isProfileLoading ? <Loading />: isProfileError ? <ErrorComponent message={'Error while loading data'}/>
              : isProfileSuccess && profileData && <ProfileForm coder={profileData.data}/>
            }
          </div>
          <div className="col-span-1 lg:col-span-1 p-4 h-full flex flex-col gap-3">
            <CoderStats theme={theme}/>
            <CoderHeatMap theme={theme}/>
          </div>
        </div>
    </div>
  );
}

export default Profile