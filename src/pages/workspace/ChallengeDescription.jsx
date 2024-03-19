/* eslint-disable react/prop-types */
import MarkdownPreview from '@uiw/react-markdown-preview';
import { BsCheck2Circle } from "react-icons/bs";
function ChallengeDescription({challenge}) {
  // TODO: Load data from server
  const completed = true;
  return (
    <div className="flex flex-col h-full text-black overflow-scroll">
        <div className='flex items-center justify-between mx-2'>
          <div className='text-4xl'>{challenge.title}</div>
          <div className='flex gap-2 items-center'>
            <div className="badge badge-success text-white">{challenge.difficulty}</div>
            <BsCheck2Circle size={28} color='green'/>
          </div>
        </div>
        <MarkdownPreview source={challenge.description.trim()} style={
          {
            textAlign: 'start', 
            padding: 16, 
            height: '100%', 
            backgroundColor: '#f2f2f0', 
            color: 'black', 
            overflow: 'scroll'
          }
        }/>
    </div>
  )
}

export default ChallengeDescription