/* eslint-disable react/prop-types */
import ProgressBar from "@ramonak/react-progress-bar";

function CoderStats({stats}) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-2">
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