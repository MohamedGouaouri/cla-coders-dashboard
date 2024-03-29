/* eslint-disable react/prop-types */
import ProgressBar from "@ramonak/react-progress-bar";
import clsx from "clsx";
import useAuth from "../hooks/useAuth";
import { useGetCoderStatsQuery } from "../api/grading.api";
import Loading from "./Loading";
import ErrorComponent from "./Error";


function CoderStats({ theme }) {
  const isDark = theme !== 'light';
  const { token } = useAuth();
  const { data, isLoading, isSuccess, isError } = useGetCoderStatsQuery(token);

  return (
    <div className={clsx(isDark ? 'dark' : '', "text-black p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
      <h1 className="text-3xl">Completed challenges</h1>
      {isLoading ? <Loading />: isError ? <ErrorComponent message={'Error while loading data'}/> :
        isSuccess && data && (
          <>
            <div>
              <p>Easy: {data.data.totalEasySolvedChallenges} / {data.data.totalEasyChallenges}</p>
              <ProgressBar completed={isNaN(data.data.totalEasySolvedChallenges / data.data.totalEasyChallenges) ? 0 : data.data.totalEasySolvedChallenges * 100 / data.data.totalEasyChallenges} bgColor="#46eb6f" />
            </div>
            <div>
              <p>Moderate: {data.data.totalModerateSolvedChallenges} / {data.data.totalModerateChallenges}</p>
              <ProgressBar completed={isNaN(data.data.totalModerateSolvedChallenges / data.data.totalModerateChallenges) ? 0 : 100 * data.data.totalModerateSolvedChallenges / data.data.totalModerateChallenges} bgColor="#f0b326" />
            </div>
            <div>
              <p>Hard: {data.data.totalHardSolvedChallenges} / {data.data.totalHardChallenges}</p>
              <ProgressBar completed={isNaN(data.data.totalHardSolvedChallenges / data.data.totalHardChallenges) ? 0 : 100 * data.data.totalHardSolvedChallenges / data.data.totalHardChallenges} bgColor="#f04826" />
            </div>
          </>
        )
      }
    </div>
  );
}

export default CoderStats;
