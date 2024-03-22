/* eslint-disable react/prop-types */
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import {javascript} from '@codemirror/lang-javascript'
import {python} from '@codemirror/lang-python'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import {useSelector, useDispatch} from 'react-redux'
import clsx from 'clsx';
import { changeFontSize, changeLanguage } from '../../redux/slices/workspace.slice';

function Playground({theme, challenge}) {
  const isDark = theme != 'light'
  const dispatch = useDispatch()
  const language = useSelector(state => state.workspace.language)
  const fontSize = useSelector(state => state.workspace.fontSize)

  const [selectedTestCase, setSelectedTestCase] = useState(0)

  const handleChange = (event) => {
    dispatch(changeLanguage({
        language: event.target.value
    }))
  };

  const handleFontChange = (event) => {
    console.log(event.target.value)
    dispatch(changeFontSize({
        fontSize: event.target.value
    }))
  }

  const handleCaseSelect = (idx) => {
    setSelectedTestCase(idx)
  }

  console.log(vscodeDark)

  return (  <Split
            className='h-screen w-full text-inherit'
            direction='vertical'
            sizes={[60, 40]}
        >
            <div className='overflow-auto text-start h-full'>
                <div className='flex flex-row-reverse gap-2'>
                    {/* Language select */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="language-select">Language</InputLabel>
                        <Select
                            labelId='language-select'
                            value={language}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label', }}
                        >
                        <MenuItem value={'js'}>Javascript</MenuItem>
                        <MenuItem value={'py'}>Python</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Font select */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="font-select">Font size</InputLabel>
                        <Select
                            labelId='font-select'
                            value={fontSize}
                            onChange={handleFontChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={clsx(isDark ? 'dark' : '', 'h-full dark:bg-bgCodeDark')}>
                <CodeMirror 
                    value='const a = 1;'
                    theme={isDark ? vscodeDark: null}
                    extensions={language == 'py' ? [python()] : [javascript()]}
                    style={{fontSize: `${fontSize}px`, height: '100%'}}
                    className='h-full'
                />
                </div>
            </div>
            <div className='w-full px-5 overflow-auto text-inherit'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none' />
						</div>
					</div>
                    {/* Test case select */}
					<div className='flex'>
                        {challenge ? challenge.tests?.map((_, idx) => {
                            return <div key={idx} className='mr-2 items-start mt-2'>
                                <div className='flex flex-wrap items-center gap-y-4'>
                                    <div
                                        className={clsx(selectedTestCase == idx ? 'bg-textPrimary text-white' : 'bg-slate-200 text-black','hover:bg-textPrimary hover:text-white font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap')}
                                        onClick={() => handleCaseSelect(idx)}
                                    >
                                        Case {idx+1}
                                    </div>
                                </div>
                            </div>
                        }) : <></>}

					</div>
                    {/* Test case (input and output) */}
					<div className='font-semibold my-4 text-start'>
						{challenge && challenge.tests ? <>
                        
                            <p className='text-sm font-medium mt-4 text-start'>Input:</p>
                                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent bg-slate-200 text-black mt-2'>
                                    {challenge.tests[selectedTestCase].inputText}
                                </div>
                                <p className='text-sm font-medium mt-4 '>Expected output:</p>
                                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent bg-slate-200 text-black mt-2'>
                                {challenge.tests[selectedTestCase].outputText}
                            </div>
                        </> : <></>}
					</div>
                    {/* Submit btn */}
                    <div className='flex flex-row-reverse flex-wrap items-center gap-y-4'>
						<button
							className={`text-black bg-slate-200 hover:bg-textPrimary hover:text-white font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
						>
							Submit
						</button>
					</div>
				</div>
        </Split>
    // </div>
  )
}

export default Playground