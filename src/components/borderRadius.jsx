import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {
    updateBorderRadius,
    updateBorderRadiusEditTypes,
    updateBorderRadiusUnit,
    updateTailwindCode,
    updateBorderRadiusT,
    updateBorderRadiusB,
    updateBorderRadiusL,
    updateBorderRadiusR,

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
    const T = {
        TITLE : 'BorderRadius Top: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.topLeft,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusT(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderTopLeftRadius = prop+'px';
            demo.style.borderTopRightRadius = prop+'px';
        }
    }
    const B = {
        TITLE : 'BorderRadius Bottom: ',
        EDIT_TYPES : data.borderRadius.editTypes,
        STATIC : data.borderRadius.static,
        ON_EDIT :reduxStyles.borderRadius.onEdit,
        VALUE : reduxStyles.borderRadius.bottomLeft,
        CUSTOM : data.borderRadius.custom,
        UPDATE_FUNCTION : (prop) => updateBorderRadiusB(prop),
        UPDATE_UNIT_FUNCTION : (prop) => updateBorderRadiusUnit(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
            const demo = document.getElementById('demo');
            demo.style.borderBottomLeftRadius = prop+'px';
            demo.style.borderBottomRightRadius = prop+'px';
        }
    }
    
    useEffect(()=>{
        const demo = document.getElementById('demo');
        dispatch(updateTailwindCode(demo.classList.value));
        demo.style.borderTopLeftRadius = reduxStyles.borderRadius.topLeft + reduxStyles.borderRadius.unit;
        demo.style.borderTopRightRadius = reduxStyles.borderRadius.topRight + reduxStyles.borderRadius.unit;
        demo.style.borderBottomLeftRadius = reduxStyles.borderRadius.bottomLeft + reduxStyles.borderRadius.unit;
        demo.style.borderBottomRightRadius = reduxStyles.borderRadius.bottomRight + reduxStyles.borderRadius.unit;
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
                    <OptionsFrame data={T}/>
                    <OptionsFrame data={B}/>
                </>
            : null
        }
    </div>
  )
}

export default BorderRadiusComponent