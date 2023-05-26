import { useState,useEffect } from 'react'
import data from './data.json'
import {useSelector,useDispatch} from 'react-redux'
import {updateInnerText} from './slices/styleSlice'
import BorderRadiusComponent from './components/borderRadius'
import FooterComponent from './components/essentials/footer'
import DemoComponent from './components/essentials/demo'
function App() {
  const reduxStyles = useSelector((state)=> state.styles);
  const dispatch = useDispatch()

  return (
    <main className='flex w-screen h-screen min-h-[200vh] m-0 p-0'>

      <div className='w-[60%] flex flex-col'>
        <input type="text" max={15} min={4} placeholder="Demo"
          className="border border-gray-700 w-[100px]"
          onChange={(e)=>{
            dispatch(updateInnerText(e.target.value))
          }}/>
        <BorderRadiusComponent/>

      </div>

        <DemoComponent/>
      
      <FooterComponent/>
    </main>
  )
}

export default App
