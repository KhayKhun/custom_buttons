import {useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {updateInnerText} from './slices/borderSlice'
import BorderRadiusComponent from './components/borderRadius'
import DemoComponent from './components/essentials/demo'
import SideMenuComponent from './components/essentials/sidemenu'
import PaddingComponent from './components/padding'
import CodeOutputComponent from './components/essentials/codeOutput'
import FontComponent from './components/font'

function App() {
  const dispatch = useDispatch()

  return (
    <main className='w-screen h-screen overflow-hidden flex justify-around pt-[40px] bg-gray-100'>
      <SideMenuComponent/>
      <div className='w-[60%] flex flex-col h-screen overflow-y-scroll py-[20px]'>
        <input type="text" max={15} min={4} placeholder="Demo"
          className="border border-gray-700 w-[100px]"
          onChange={(e)=>{
            dispatch(updateInnerText(e.target.value))
          }}/>
        <BorderRadiusComponent/>
        <hr />
        <PaddingComponent/>
        <hr />
        <FontComponent/>
        <hr />
        <div className=' mb-[190px]'/>
      </div>
      <div className='flex w-[25%] justify-center items-center h-screen'>  
        <DemoComponent/>
      </div>
      
      <CodeOutputComponent/>
    </main>
  )
}

export default App
