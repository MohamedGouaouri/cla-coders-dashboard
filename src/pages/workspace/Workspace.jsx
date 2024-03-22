/* eslint-disable react/prop-types */
import Split from 'react-split'
import ChallengeDescription from './ChallengeDescription'
import Playground from './Playground'
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { useGetChallengeByIdQuery } from '../../api/coders.api';


function Workspace() {
  const {id} = useParams()
  const {data} = useGetChallengeByIdQuery(id)
  return <div className="h-screen w-screen overflow-scroll bg-slate-100">
            <Navbar />
            <div className="p-2">
                    {data && <Split
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
                        <ChallengeDescription challenge={data[0]} />
                        <Playground challenge={data[0]}/>
                        
                    </Split>}
                </div>
        </div>
}

export default Workspace