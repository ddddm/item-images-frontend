/**
 * Created by dima on 06.12.16.
 */
import React from 'react';
import ViButton from './ViButton';

import './ViFileDownload.css'

const ViFileDownloadButton = function ({ onClick, assetUri, type, loading }) {
    return (
        <div className="ViFileDownload">
            {onClick && <ViButton onClick={() => {
                onClick(type)
            }} label={`Export ${type}`}/>}
            {assetUri &&  <div className="ViFileDownload-assetDownloadButtonWr">
                <a className="ViFileDownload-assetDownloadButton" href={assetUri}>Download {type}</a>
            </div>}
            {loading &&  <div className="ViFileDownload-assetDownloadButtonWr">Loading...</div>}
        </div>
    )
}

export default ViFileDownloadButton;