import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {
    updateBorderRadius,
    updateBorderRadiusEditTypes,
    updateBorderRadiusUnit,
    updateTailwindCode,
    updateBorderRadiusTL,
    updateBorderRadiusTR,
    updateBorderRadiusBL,
    updateBorderRadiusBR,
    updateBorderRadiusTLUnit,
    updateBorderRadiusTRUnit,
    updateBorderRadiusBLUnit,
    updateBorderRadiusBRUnit,

} from '../slices/borderSlice'
import data from '../data.json'
import OptionsFrame from './card/optionsFrame'
import ChoiceFrameComponent from './card/choiceFrame'

const BorderRadiusComponent = () => {
    const borderState = useSelector(state => state.borderReducer)
    const dispatch = useDispatch();
    const allSide = {
        KEY : 'all',
        TITLE : 'All side',
        STATIC : data.borderRadius.static,
        VALUE : borderState.borderRadius.topLeft,
        UNIT : borderState.borderRadius.unit,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadius(prop),
        UPDATE_TYPES_FUNCTION : (prop) => updateBorderRadiusEditTypes(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');

            demo.style.borderTopLeftRadius = prop+ borderState.borderRadius.unit;
            demo.style.borderTopRightRadius = prop+ borderState.borderRadius.unit;
            demo.style.borderBottomLeftRadius = prop+ borderState.borderRadius.unit;
            demo.style.borderBottomRightRadius = prop+ borderState.borderRadius.unit;
        }
    }
    const fourAngles = [
    {
        KEY :"TL",
        TITLE : 'top-left: ',
        STATIC : data.borderRadius.static,
        VALUE : borderState.borderRadius.topLeft,
        UNIT : borderState.borderRadius.topLeftUnit,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusTL(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusTLUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderTopLeftRadius = prop+'px';
        }
    },
    {
        KEY :"TR",
        TITLE : 'top-right: ',
        STATIC : data.borderRadius.static,
        VALUE : borderState.borderRadius.topRight,
        UNIT : borderState.borderRadius.topRightUnit,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusTR(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusTRUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomRightRadius = prop+'px';
        }
    },
    {
        KEY :"BL",
        TITLE : 'bottom-left: ',
        STATIC : data.borderRadius.static,
        VALUE : borderState.borderRadius.bottomLeft,
        UNIT : borderState.borderRadius.bottomLeftUnit,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusBL(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusBLUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomLeftRadius = prop+'px';
        }
    },
    {
        KEY : 'BR',
        TITLE : 'bottom-right: ',
        STATIC : data.borderRadius.static,
        VALUE : borderState.borderRadius.bottomRight,
        UNIT : borderState.borderRadius.bottomRightUnit,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusBR(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusBRUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomRightRadius = prop+'px';
        }
    }]
    
    useEffect(()=>{
        const demo = document.getElementById('demo');
        const br = borderState.borderRadius    
        dispatch(updateTailwindCode(demo.classList.value));
        demo.style.borderTopLeftRadius = br.topLeft + br.topLeftUnit;
        demo.style.borderTopRightRadius = br.topRight + br.topRightUnit;
        demo.style.borderBottomLeftRadius = br.bottomLeft + br.bottomLeftUnit;
        demo.style.borderBottomRightRadius = br.bottomRight + br.bottomRightUnit;

        // demo.style.boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';
    },[borderState])
    const optionData = {
        options : data.borderRadius.options,
        onEdit : borderState.borderRadius.onEdit,
        DISPATCH_FUNCTION : (para)=> dispatch(updateBorderRadiusEditTypes(para))
    }
return (
    <div id='border-radius' className=''>
        <h1>Border Radius</h1>
        <ChoiceFrameComponent data={optionData}/>
        {
            borderState.borderRadius.onEdit == 4 ? 
                <OptionsFrame data={allSide}/>
            : fourAngles.map((f)=> <OptionsFrame key={f.KEY} data={f}/>)
        }
    </div>
  )
}

export default BorderRadiusComponent