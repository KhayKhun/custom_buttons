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
          borderRadius.topLeft != 0 ?
              Number(borderRadius.topLeft)?
                `rounded-tl-[${borderRadius.topLeft}${borderRadius.topLeftUnit}]`
              : 'rounded-tl-'+borderRadius.topLeft 
          : '' 
        : ''}
        ${borderRadius.onEdit == 2 ?
          borderRadius.topRight != 0 ?
              Number(borderRadius.topRight)?
                `rounded-tr-[${borderRadius.topRight}${borderRadius.topRightUnit}]`
              : 'rounded-tr-'+borderRadius.topRight 
          : '' 
        : ''}
        ${borderRadius.onEdit == 2 ?
          borderRadius.bottomLeft != 0 ?
              Number(borderRadius.bottomLeft)?
                `rounded-bl-[${borderRadius.bottomLeft}${borderRadius.bottomLeftUnit}]`
              : 'rounded-bl-'+borderRadius.bottomLeft 
          : '' 
        : ''}
        ${borderRadius.onEdit == 2 ?
          borderRadius.bottomRight != 0 ?
              Number(borderRadius.bottomRight)?
                `rounded-br-[${borderRadius.bottomRight}${borderRadius.bottomRightUnit}]`
              : 'rounded-br-'+borderRadius.bottomRight 
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