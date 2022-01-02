import React from 'react';

function Keypad() {

    function keypadEvent() {
        console.log('Entering password...')
    } 

    return (
        <input type="password" onChange={keypadEvent}/>
    )
}

export default Keypad