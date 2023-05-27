import {useEffect} from 'react'
import data from '../data.json'
import { useSelector,useDispatch } from 'react-redux'
import { updateFontSize, updateFontWeight } from '../slices/fontSlice';
import OptionsFrame from './card/optionsFrame';
import {updateTailwindCode} from '../slices/borderSlice'

const FontComponent = () => {
    const dispatch = useDispatch();
    const fontState = useSelector(state => state.fontReducer);

    const fontSizeData = {
        KEY :"FS",
        TITLE : 'size : ',
        STATIC : data.fontSize.static,
        VALUE : fontState.fontSize,
        UNIT : 'px',
        MIN : 10,
        CUSTOM : data.fontSize.custom,
        UPDATE_FUNCTION : (prop) => updateFontSize(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
          const demo = document.getElementById('demo');
          demo.style.fontSize = prop+'px';
        }
    }
    const fontWeightData = {
        KEY :"FW",
        TITLE : 'weight : ',
        STATIC : data.fontWeight.static,
        VALUE : fontState.fontWeight,
        UNIT : '',
        UPDATE_FUNCTION : (prop) => updateFontWeight(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
          const demo = document.getElementById('demo');
          demo.style.fontWeight = prop;
        }
    }
    useEffect(() => {
        const demo = document.getElementById('demo');
        dispatch(updateTailwindCode(demo.classList.value));
      
        demo.style.fontSize = fontState.fontSize + "px";
      })
  return (
    <div>
      <h1 id='typo'>Font</h1>
        <OptionsFrame data={fontSizeData}/>
        <OptionsFrame data={fontWeightData}/>
    </div>
  )
}

export default FontComponent