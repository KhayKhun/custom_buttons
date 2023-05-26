import React from 'react'
import {useSelector} from 'react-redux'

const DemoComponent = () => {
    const reduxStyles = useSelector((state)=> state.styles);
    const borderRadius = reduxStyles.borderRadius
  return (
    <button id='demo' className={` bg-blue-500 p-[20px] text-white fixed top-[50px] right-[50px]
      ${borderRadius.onEdit == 4 ?
          borderRadius.topLeft != 0?
              Number(borderRadius.topLeft) ?
                `rounded-[${borderRadius.topLeft}${borderRadius.unit}]`
              : 'rounded-'+borderRadius.topLeft 
          : '' 
        : ''} 
      
        ${borderRadius.onEdit == 2 ?
          borderRadius.topLeft != 0 && borderRadius.topRight != 0?
              Number(borderRadius.topLeft) && Number(borderRadius.topRight) ?
                `rounded-t-[${borderRadius.topLeft}${borderRadius.unit}]`
              : 'rounded-t-'+borderRadius.topLeft 
          : '' 
        : ''} 
        ${borderRadius.onEdit == 2 ?
          borderRadius.bottomLeft != 0 && borderRadius.bottomRight != 0?
              Number(borderRadius.bottomLeft) && Number(borderRadius.bottomRight) ?
                `rounded-b-[${borderRadius.bottomLeft}${borderRadius.unit}]`
              : 'rounded-b-'+borderRadius.bottomLeft 
          : '' 
        : ''} 
        

        `}>{reduxStyles.innerText}</button>
  )
}

export default DemoComponent

// ${borderRadius.onEdit == 2 ?
//   borderRadius.topLeft != 0 && borderRadius.topRight != 0?
//       Number(borderRadius.topLeft) && Number(borderRadius.topRight) ?
//         `rounded-t-[${borderRadius.topLeft}${borderRadius.unit}]`
//       : 'rounded-t-'+borderRadius.topLeft 
//   : '' 
// : ''} 
// ${borderRadius.onEdit == 2 ?
//   borderRadius.topLeft != 0 && borderRadius.topRight != 0?
//       Number(borderRadius.topLeft) && Number(borderRadius.topRight) ?
//         `rounded-t-[${borderRadius.topLeft}${borderRadius.unit}]`
//       : 'rounded-t-'+borderRadius.topLeft 
//   : '' 
// : ''}   