import React, { useEffect } from 'react';

function SetInputFocus({ inputRef }) {
    
    // set the focus of the input
    useEffect(() => {
        // inputRef.current.focus();
        console.log(inputRef);
    }, [inputRef]);

  return (
    <></>
  )
}

export default SetInputFocus;