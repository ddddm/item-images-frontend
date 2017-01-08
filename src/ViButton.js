import React from 'react'
import {Button} from 'elemental';
import './ViButton.css'

const ViButton = (
    {
        label = 'Do',
        onClick = function(){}
    }
    ) => (
    <Button className='ViButton' onClick={(e) => onClick(e)} type='primary'>{label}</Button>
)

export default ViButton;