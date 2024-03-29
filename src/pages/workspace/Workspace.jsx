/* eslint-disable react/prop-types */
import Split from 'react-split'
import ChallengeDescription from './ChallengeDescription'
import Playground from './Playground'
import { useParams } from 'react-router-dom';
import { useGetChallengeByIdQuery } from '../../api/challenges.api';
import {useSelector } from 'react-redux'
import clsx from 'clsx';
import useAuth from '../../hooks/useAuth';


function Workspace() {
  const {id} = useParams()
  const {token} = useAuth()
  const {data, isLoading, isSuccess, refetch} = useGetChallengeByIdQuery({token, id})
  const theme = useSelector(state => {
        return state.ui.theme
    })
    const isDark = theme != 'light'
  return <div className={clsx(isDark ? 'dark':'', "p-2 w-full h-full text-black bg-slate-100  dark:bg-bgMainDark dark:text-white")}>
                    {/* {} */}
                    {isLoading ? <div className='flex justify-center items-center h-full'>Preparing Workspace</div> : 
                    isSuccess ? data && <Split
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
                        <ChallengeDescription theme={theme} challenge={data.data} />
                        <Playground challenge={data.data} theme={theme} refetch={refetch}/>
                        
                    </Split> : <>Error while loading challenge workspace</>
                    }
            </div>
}

export default Workspace