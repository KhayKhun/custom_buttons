import {useEffect} from 'react'
import data from '../data.json'
import { useSelector,useDispatch } from 'react-redux'
import OptionsFrame from './card/optionsFrame';
import {updateTailwindCode} from '../slices/borderSlice'
import {updateShadow} from '../slices/shadowSlice'

const ShadowComponent = () => {
    const shadowState = useSelector(state => state.shadowReducer)
    const dispatch = useDispatch();
    const shadowData = {
        KEY :"S",
        TITLE : 'shadow : ',
        STATIC : data.shadow.static,
        UNIT : 'px',
        UPDATE_FUNCTION : (prop) => updateShadow(prop),
        UPDATE_DEMO_FUNCTION : (prop) => {
          const demo = document.getElementById('demo');
          console.log(prop);
          demo.style.boxShadow = prop;
        }
    }
    useEffect(() => {
      const demo = document.getElementById('demo');
      dispatch(updateTailwindCode(demo.classList.value));
    
      demo.style.boxShadow = shadowState.shadow;
    })
  return (
    <div id='shadow'>
        <h1>Shadow</h1>
        <OptionsFrame data={shadowData}/>
    </div>
  )
}

export default ShadowComponent