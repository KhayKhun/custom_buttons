import React from 'react'

const ChoiceFrameComponent = (prop) => {
    const DATA = {
        options : prop.data.options,
        onEdit : prop.data.onEdit,
        DISPATCH_FUNCTION : prop.data.DISPATCH_FUNCTION
    }
  return (
    <ul className='flex'>
    {
        DATA.options.map((option)=> {
        return <li key={option.name} className={`small-btn ${DATA.onEdit == option.value ? 'on' : ''}`}  onClick={()=>{
            DATA.DISPATCH_FUNCTION(option.value)
        }}>{option.name}</li>} )
    }
    </ul>
  )
}

export default ChoiceFrameComponent