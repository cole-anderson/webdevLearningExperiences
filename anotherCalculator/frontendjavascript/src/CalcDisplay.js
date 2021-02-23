import React from 'react'

function CalcDisplay(props) {
    return(
        <input 
            readOnly={true} 
            value={props.text}
            className="calculator-display" 
            value={props.text} 
            />
    );
}

export default CalcDisplay;
