/* eslint-disable react/prop-types */
import Split from 'react-split'
import ChallengeDescription from './ChallengeDescription'
import Playground from './Playground'
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { useGetChallengeByIdQuery } from '../../api/coders.api';
import {useSelector } from 'react-redux'
import clsx from 'clsx';


function Workspace() {
  const {id} = useParams()
  const {data} = useGetChallengeByIdQuery(id)
  const theme = useSelector(state => {
        return state.ui.theme
    })
    const isDark = theme != 'light'
  return <div className="h-screen w-screen overflow-scroll">
            <Navbar />
            <div className={clsx(isDark ? 'dark':'', "p-2 w-full h-full text-black bg-slate-100  dark:bg-bgMainDark dark:text-white")}>
                    {data && <Split
                        minSize={200}
                        expandToMin={false}
                        gutterSize={10}
                        gutterAlign="center"
                        snapOffset={30}
                        dragInterval={1}
                        direction="horizontal"
                        cursor="col-resize"
                        className={clsx(isDark ? 'dark':'', 'split text-black dark:text-white')}
                    >
                        <ChallengeDescription theme={theme} challenge={data[0]} />
                        <Playground challenge={data[0]}/>
                        
                    </Split>}
                </div>
        </div>
}

export default Workspace