/* eslint-disable react/prop-types */
import ProgressBar from "@ramonak/react-progress-bar";
import clsx from "clsx";

function CoderStats({theme, stats}) {
  const isDark = theme != 'light'
  return (
    <div className={clsx(isDark ? 'dark': '', "text-black  p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
              <h1 className="text-3xl">Completed challenges</h1>
              <div>
                <p>Easy: </p>
                <ProgressBar completed={stats.easy} bgColor="#46eb6f" />
              </div>
              <div>
                <p>Moderate: </p>
                <ProgressBar completed={stats.moderate} bgColor="#f0b326" />
              </div>
              <div>
                <p>Hard:</p>
                <ProgressBar completed={stats.hard} bgColor="#f04826" />
              </div>
    </div>
  )
}

export default CoderStats