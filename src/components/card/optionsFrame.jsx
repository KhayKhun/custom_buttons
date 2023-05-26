import React from 'react'
import {useDispatch} from 'react-redux'
const OptionsFrame = (prop) => {
    const propData = prop.data
    const dispatch = useDispatch();
  return (
    <section className='flex flex-col justify-evenly'>
            <div>
                {propData.TITLE}
            <ul>
              {
                propData.STATIC.map((b)=> <button key={b.name} className="small-btn" onClick={(event)=>{
                  const input = event.target.parentElement.parentElement.lastElementChild;
                    input.classList.add('hidden')
                    dispatch(propData.UPDATE_FUNCTION(b.name))
                    propData.UPDATE_DEMO_FUNCTION(b.value)
                }}>{b.name}</button>)
              }
              <button className='small-btn' onClick={(event)=>{
                const input = event.target.parentElement.parentElement.lastElementChild;
                input.classList.remove('hidden');
                dispatch(propData.UPDATE_FUNCTION(input.firstElementChild.value))
              }}>Custom</button>
            </ul>
          <p className='flex'>
            <input type="range" min={0} max={50} value={Number(propData.VALUE) ? propData.VALUE :0} onChange={(event)=>{
              dispatch(propData.UPDATE_FUNCTION(event.target.value))
            }}/>
            <input type="number" value={Number(propData.VALUE) ? propData.VALUE :0} className="w-[60px] border" max={50} onChange={(e)=>{
                dispatch(propData.UPDATE_FUNCTION(e.target.value))
            }}/>
            {
              propData.CUSTOM.map((c)=> <span key={c} className='small-btn' onClick={()=>{
                dispatch(propData.UPDATE_UNIT_FUNCTION(c))
              }}>{c}</span> )
            }
          </p>
        </div>
    </section>
  )
}

export default OptionsFrame