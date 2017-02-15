import React, { Component } from 'react';
import { Spinner } from 'elemental';
import './FullWidthSpinner.css';

export default function FullWidthSpinner() {
  return (
    <div className='FullWidthSpinner'>
      <Spinner size="lg" />
    </div>
  )
}
