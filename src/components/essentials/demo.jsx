import React from 'react'
import {useSelector} from 'react-redux'

const DemoComponent = () => {
    const reduxStyles = useSelector((state)=> state.borderReducer);
    const sizingState = useSelector((state)=> state.sizingReducer);
    const fontState = useSelector((state)=> state.fontReducer);
    const borderRadius = reduxStyles.borderRadius
  return (
    <button id='demo' className={`bg-blue-500 text-white
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
        ${sizingState.editType == 1 ?
          sizingState.paddingX != 0 ?
              Number(sizingState.paddingX)?
                `p-[${sizingState.paddingX}px]`
              : 'p-'+sizingState.paddingX[1]
          : '' 
        : ''}
        ${sizingState.editType == 2 ?
          sizingState.paddingX != 0 ?
              Number(sizingState.paddingX)?
                `px-[${sizingState.paddingX}px]`
              : 'px-'+sizingState.paddingX[1]
          : '' 
        : ''}
        ${sizingState.editType == 2 ?
          sizingState.paddingY != 0 ?
              Number(sizingState.paddingY)?
                `py-[${sizingState.paddingY}px]`
              : 'py-'+sizingState.paddingY[1]
          : '' 
        : ''}
        ${fontState.fontSize ?
          fontState.fontSize != 0 ?
              Number(fontState.fontSize)?
                `text-[${fontState.fontSize}px]`
              : 'text-'+fontState.fontSize 
          : '' 
        : ''}
        ${fontState.fontWeight ?
          fontState.fontWeight != 0 ?
              Number(fontState.fontWeight)?
                ''
              : 'font-'+fontState.fontWeight 
          : '' 
        : ''}

        `}>{reduxStyles.innerText}</button>
  )
}

export default DemoComponent