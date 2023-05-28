import React, { useRef } from 'react';
import {BiCopy} from 'react-icons/bi'
const CopyButtonComponent = ({ text }) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    // Select the text inside the element
    textRef.current.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Alert the user that the text has been copied
    alert('Text has been copied to the clipboard!');
  };

  return (
    <div>
      <textarea
        ref={textRef}
        style={{ position: 'fixed', top: '-9999px' }}
        value={text}
        readOnly
      />
      <button onClick={handleCopy} className="text-white"><BiCopy/></button>
    </div>
  );
};

export default CopyButtonComponent;
