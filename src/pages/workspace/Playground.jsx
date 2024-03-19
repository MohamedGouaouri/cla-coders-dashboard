import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror'
// import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import {javascript} from '@codemirror/lang-javascript'
import {python} from '@codemirror/lang-python'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import { useState } from 'react';

function Playground() {

    const [language, setlanguage] = useState('js')

  const handleChange = (event) => {
    setlanguage(event.target.value);
  };

  return (  <Split
            className='h-screen w-full text-black'
            direction='vertical'
            sizes={[60, 40]}
        >
            <div className='overflow-auto text-start h-full'>
                {/*  */}
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                        value={language}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >

                        <MenuItem value={'js'}>Javascript</MenuItem>
                        <MenuItem value={'py'}>Python</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <CodeMirror 
                    value='const a = 1;'
                    // theme={vscode}
                    extensions={language == 'py' ? [python()] : [javascript()]}
                    style={{fontSize: '16px', height: '100%'}}
                    className='h-full'
                />
            </div>
            <div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-black'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-black' />
						</div>
					</div>
                    {/* Test case select */}
					<div className='flex'>
                        <div className='mr-2 items-start mt-2'>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`text-black bg-slate-200 hover:bg-textPrimary hover:text-white font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
									>
										Case 1
									</div>
								</div>
						</div>

                        <div className='mr-2 items-start mt-2'>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`text-black bg-slate-200 hover:bg-textPrimary hover:text-white font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
									>
										Case 2
									</div>
								</div>
						</div>

					</div>
                    {/* Test case (input and output) */}
					<div className='font-semibold my-4 text-start'>
						<p className='text-sm font-medium mt-4 text-black text-start'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent bg-slate-200 text-black mt-2'>
                        Input text
						</div>
						<p className='text-sm font-medium mt-4 text-black'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent bg-slate-200 text-black mt-2'>
                            outputText
						</div>
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