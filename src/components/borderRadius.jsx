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

} from '../slices/styleSlice'
import data from '../data.json'
import OptionsFrame from './card/optionsFrame'

const BorderRadiusComponent = () => {
    const reduxStyles = useSelector(state => state.styles)
    const dispatch = useDispatch();
    const allSide = {
        TITLE : 'BorderRadius : ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.topLeft,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadius(prop),
        UPDATE_TYPES_FUNCTION : (prop) => updateBorderRadiusEditTypes(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderRadius = prop+'px';
        }
    }
    const TL = {
        TITLE : 'BorderRadius Top-Left: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.topLeft,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusTL(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusTLUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderTopLeftRadius = prop+'px';
        }
    }
    const TR = {
        TITLE : 'BorderRadius Top-Right: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.topRight,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusTR(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusTRUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomRightRadius = prop+'px';
        }
    }
    const BL = {
        TITLE : 'BorderRadius Bottom-Left: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.bottomLeft,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusBL(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusBLUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomLeftRadius = prop+'px';
        }
    }
    const BR = {
        TITLE : 'BorderRadius Bottom-Right: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.bottomRight,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusBR(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusBRUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomRightRadius = prop+'px';
        }
    }
    
    useEffect(()=>{
        const demo = document.getElementById('demo');
        dispatch(updateTailwindCode(demo.classList.value));
        demo.style.borderTopLeftRadius = reduxStyles.borderRadius.topLeft + reduxStyles.borderRadius.topLeftUnit;
        demo.style.borderTopRightRadius = reduxStyles.borderRadius.topRight + reduxStyles.borderRadius.topRightUnit;
        demo.style.borderBottomLeftRadius = reduxStyles.borderRadius.bottomLeft + reduxStyles.borderRadius.bottomLeftUnit;
        demo.style.borderBottomRightRadius = reduxStyles.borderRadius.bottomRight + reduxStyles.borderRadius.bottomRightUnit;
    },[reduxStyles])
return (
    <div>
        <h1>Border Radius</h1>
        <ul className='flex'>
            {
                data.borderRadius.editTypes.map(e => <li key={e} className="small-btn" onClick={()=>{
                    dispatch(updateBorderRadiusEditTypes(e))
                }}>{e}</li>)
            }
        </ul>
        {
            reduxStyles.borderRadius.onEdit == 4 ? 
                <OptionsFrame data={allSide}/>
            : null
        }
        {
            reduxStyles.borderRadius.onEdit == 2 ? 
                <>
                    <OptionsFrame data={TL}/>
                    <OptionsFrame data={TR}/>
                    <OptionsFrame data={BL}/>
                    <OptionsFrame data={BR}/>
                </>
            : null
        }
    </div>
  )
}

export default BorderRadiusComponent