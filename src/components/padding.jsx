import {useEffect,useState} from 'react'
import OptionsFrame from './card/optionsFrame'
import {updatePaddingX,updatePaddingY,updatePadding,updatePaddingEditType} from '../slices/sizingSlice'
import data from '../data.json'
import { useSelector,useDispatch } from 'react-redux'
import {updateTailwindCode} from '../slices/borderSlice'
import ChoiceFrameComponent from './card/choiceFrame'

const PaddingComponent = () => {
  const dispatch = useDispatch();
  const sizeState = useSelector(state => state.sizingReducer);

  const Balance = {
    KEY :"P",
    TITLE : 'Padding : ',
    STATIC : data.padding.static,
    VALUE : sizeState.paddingX,
    UNIT : 'px',
    CUSTOM : data.padding.custom,
    UPDATE_FUNCTION : (prop) => updatePadding(prop),
    UPDATE_DEMO_FUNCTION : (prop) => {
      const demo = document.getElementById('demo');
      demo.style.padding = prop+'px';
    }
  }
  const XandY = [{
    KEY :"PX",
    TITLE : 'Padding x: ',
    STATIC : data.padding.static,
    VALUE : sizeState.paddingX,
    UNIT : 'px',
    CUSTOM : data.padding.custom,
    UPDATE_FUNCTION : (prop) => updatePaddingX(prop),
    UPDATE_DEMO_FUNCTION : (prop) => {
      const demo = document.getElementById('demo');
      demo.style.paddingLeft = prop+'px';
      demo.style.paddingRight = prop+'px';
    }
  },{
    KEY :"PY",
    TITLE : 'Padding y: ',
    STATIC : data.padding.static,
    VALUE : sizeState.paddingY,
    UNIT : 'px',
    CUSTOM : data.padding.custom,
    UPDATE_FUNCTION : (prop) => updatePaddingY(prop),
    UPDATE_DEMO_FUNCTION : (prop) => {
      const demo = document.getElementById('demo');
      demo.style.paddingTop = prop+'px';
      demo.style.paddingBottom = prop+'px';
    }
  }]
useEffect(() => {
  const demo = document.getElementById('demo');
  dispatch(updateTailwindCode(demo.classList.value));

  demo.style.paddingTop = sizeState.paddingY + "px";
  demo.style.paddingBottom = sizeState.paddingY + "px";
  demo.style.paddingLeft = sizeState.paddingX + "px";
  demo.style.paddingRight = sizeState.paddingX + "px";
})
const optionData = {
    options : data.padding.options,
    onEdit : sizeState.editType,
    DISPATCH_FUNCTION : (para)=> dispatch(updatePaddingEditType(para))
}
  return (
    <div id='padding'>
      <h1>Padding</h1>
        <ChoiceFrameComponent data={optionData}/>
      {
        sizeState.editType === 1 ?
        <OptionsFrame data={Balance}/>
        :
        XandY.map(x => <OptionsFrame key={x.KEY} data={x}/>)
      }
    </div>
  )
}

export default PaddingComponent