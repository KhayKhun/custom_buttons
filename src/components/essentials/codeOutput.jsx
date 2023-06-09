import {useRef} from 'react'
import { useSelector } from 'react-redux'
import CopyButtonComponent from './copyButton'

const CodeOutputComponent = () => {

  const reduxStyles = useSelector(state=> state.borderReducer)
  
  return (
    <footer className='w-screen bg-gray-800 fixed left-0 bottom-0 flex py-[10px]'>
        <code className='text-sm inline text-white'>
            &lt;
            <span className='text-red-500'>button </span>
            <span className='text-yellow-500'>class</span>
            <span className='text-red-500'>=</span>
            <span className='text-green-500'>"{reduxStyles.tailwindCode}"</span>
            &gt;
            {reduxStyles.innerText}
            &lt;/
            <span className='text-red-500'>button</span>
            &gt;
        </code>
        <CopyButtonComponent text={`<button class="${reduxStyles.tailwindCode.trim().replace(/\s+/g, ' ')}">${reduxStyles.innerText}</button>`}/>
      </footer>
  )
}

export default CodeOutputComponent