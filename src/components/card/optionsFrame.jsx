import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const OptionsFrame = (prop) => {
  const propData = prop.data;
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (b) => {
    setActiveButton(b.name);
    dispatch(propData.UPDATE_FUNCTION(b.name));
    setTimeout(()=>{
      propData.UPDATE_DEMO_FUNCTION(b.value);
    },1)
  };

  const handleCustomButtonClick = () => {
    setActiveButton(null);
    const input = document.getElementById(`input${propData.KEY}`);
    input.classList.remove('hidden');
    dispatch(propData.UPDATE_FUNCTION(input.value));
  };

  return (
    <section className="option">
      <div className='flex flex-col lg:grid lg:grid-cols-7 justify-around bg-white p-[10px]'>
      <h1 className='lg:col-span-1'>{propData.TITLE}</h1>
        <ul className={`inline ${propData.CUSTOM ? 'lg:col-span-3' : 'lg:col-span-6'}`}>
          {propData.STATIC.map((b) => (
            <button
              id={`btn${propData.KEY}`}
              key={b.name}
              className={`small-btn ${activeButton === b.name ? 'active' : ''}`}
              onClick={() => handleButtonClick(b)}
            >
              {b.name}
            </button>
          ))}
          <button
            id={`btn${propData.KEY}`}
            className={`small-btn ${activeButton === null ? 'active' : ''} ${propData.CUSTOM ? '' : 'hidden'}`}
            onClick={handleCustomButtonClick}
          >
            Custom
          </button>
        </ul>
          {propData.CUSTOM ? <p className={`flex items-center gap-[5px] ${activeButton === null ? '' : 'hidden'} lg:col-span-2`}>
            <input
              type="range"
              min={propData.MIN ? propData.MIN : 0}
              max={propData.MAX ? propData.MAX :50}
              value={Number(propData.VALUE) ? propData.VALUE : 0}
              className={`${activeButton === null ? '' : 'hidden'}`}
              onChange={(event) => {
                dispatch(propData.UPDATE_FUNCTION(event.target.value));
              }}
            />
            <input
              id={`input${propData.KEY}`}
              type="number"
              value={Number(propData.VALUE) ? propData.VALUE : 0}
              className="w-[60px] border h-[70%] p-[5px] rounded-lg"
              min={propData.MIN ? propData.MIN : 0}
              max={propData.MAX ? propData.MAX : 50}
              onChange={(e) => {
                dispatch(propData.UPDATE_FUNCTION(e.target.value));
              }}
            />
            {propData.CUSTOM?.map((c) => (
              <span
                key={c}
                className={`small-unit ${propData.UNIT === c ? 'active' : ''}`}
                onClick={() => {
                  dispatch(propData.UPDATE_UNIT_FUNCTION(c));
                }}
              >
                {c}
              </span>
            ))}
          </p> : null}
      </div>
    </section>
  );
};

export default OptionsFrame;
