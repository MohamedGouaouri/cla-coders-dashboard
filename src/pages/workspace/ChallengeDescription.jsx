/* eslint-disable react/prop-types */
import MarkdownPreview from '@uiw/react-markdown-preview';
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';

function ChallengeDescription({theme, challenge}) {
  const isDark = theme != 'light';
  const difficultyBadgeStyle = clsx('text-white', 'badge', challenge.difficulty == 'Easy' ? 'badge-success' : challenge.difficulty == 'Moderate' ? 'badge-warning': 'badge-error')
  return (
    <div className="flex flex-col h-full overflow-scroll bg-inherit">
        <div className='flex items-center justify-between mx-2'>
          <div className='text-4xl'>{challenge.title}</div>
          <div className='flex gap-2 items-center'>
            <div className={difficultyBadgeStyle}>{challenge.level}</div>
            <Tooltip title={challenge.status}>
              <span>{challenge.status == 'Completed' ? <BsCheck2Circle size={28} color="#2aeb34"/> : challenge.status == 'Attempted' ? <LuFileSpreadsheet size={28} color={"#036bfc"}/> : <FaRegHourglass size={28} color={"#fc9003"}/>}</span>
            </Tooltip>
          </div>
        </div>
        <MarkdownPreview source={challenge.description?.trim()} style={
          {
            textAlign: 'start', 
            padding: 16, 
            height: '100%', 
            backgroundColor: 'inherit', 
            color: isDark ? 'white' : 'black', 
            overflow: 'scroll'
          }
        }/>
    </div>
  )
}

export default ChallengeDescription