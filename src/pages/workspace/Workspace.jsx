/* eslint-disable react/prop-types */
import Split from 'react-split'
import ChallengeDescription from './ChallengeDescription'
import Playground from './Playground'

function Workspace({challenge}) {
  return <Split
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
        <Playground />
    </Split>
}

export default Workspace