import {useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {updateInnerText} from './slices/borderSlice'
import BorderRadiusComponent from './components/borderRadius'
import DemoComponent from './components/essentials/demo'
import SideMenuComponent from './components/essentials/sidemenu'
import PaddingComponent from './components/padding'
import CodeOutputComponent from './components/essentials/codeOutput'
import FontComponent from './components/font'
import ShadowComponent from './components/shadow'

function App() {
  const dispatch = useDispatch()

  return (
    <main className='w-screen h-screen overflow-hidden bg-gray-100'>
      <SideMenuComponent/>
      <div className='w-[60vw] flex flex-col h-screen overflow-y-scroll py-[20px] fixed top-[40px] left-[15vw] px-[10px]'>
        <input id='inner-text' type="text" max={15} min={4} placeholder="Demo"
          className="border border-gray-700 w-[100px]"
          onChange={(e)=>{
            dispatch(updateInnerText(e.target.value))
          }}/>
        <FontComponent/>
        <hr />
        <PaddingComponent/>
        <hr />
        <BorderRadiusComponent/>
        <hr />
        <ShadowComponent/>
        <hr />
        <div className=' mb-[190px]'/>
      </div>
      <div className='flex justify-center items-center fixed right-0 w-[25vw]  h-screen bg-white'>  
        <DemoComponent/>
      </div>
      
      <CodeOutputComponent/>
    </main>
  )
}

export default App
