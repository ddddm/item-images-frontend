import './ViButton.css'
import React from 'react'

const ViButton = (
    {
        label = 'Do',
        onClick = function(){}
    }
    ) => (
    <button onClick={(e) => onClick(e)} className='ViButton'>{label}</button>
)

export default ViButton;