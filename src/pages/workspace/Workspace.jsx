/* eslint-disable react/prop-types */
import Split from 'react-split'
import ChallengeDescription from './ChallengeDescription'
import Playground from './Playground'
import { useParams } from 'react-router-dom';
import challenges from '../../data/challenges';
import { Navbar } from '../../components/Navbar';
function Workspace({challenge}) {
  const {id} = useParams()
  console.log(id)
  // TODO: Fetch challenge
  challenge = challenges[id]
  return <div className="h-screen w-screen overflow-scroll bg-slate-100">
            <Navbar />
            <div className="p-2">
                    <Split
                        minSize={200}
                        expandToMin={false}
                        gutterSize={10}
                        gutterAlign="center"
                        snapOffset={30}
                        dragInterval={1}
                        direction="horizontal"
                        cursor="col-resize"
                        className='split text-white'
                    >
                        <ChallengeDescription challenge={challenge} />
                        <Playground challenge={challenge}/>
                    </Split>
            </div>
        </div>
}

export default Workspace