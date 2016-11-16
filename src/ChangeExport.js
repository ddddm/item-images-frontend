/**
 * Created by dima on 06.11.16.
 */

import React, {Component} from 'react'
import ChangeModel from './ChangeModel'

function ChangeDownloadButton(props) {
    return (
        <button onClick={() => {
            props.onClick(props.type)
        }}>{props.label}</button>
    )
}

class ChangeExport extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.sendDownloadRequest = this.sendDownloadRequest.bind(this)

    }

    sendDownloadRequest(type) {
        if(type !== 'zip' && type !== 'excel') return;

        ChangeModel.exportAsset(this.props.changeId, type)
            .then((filePath) => {
                this.setState({
                    [type]: filePath
                })
            })
    }

    render() {
        const isZipFile = this.state.zip;
        const isExcelFile = this.state.excel;

        return (
            <div>
                <ChangeDownloadButton onClick={this.sendDownloadRequest} type="zip" label='Export images'/>
                <ChangeDownloadButton onClick={this.sendDownloadRequest} type="excel" label="Export change in xlsx"/>

                <p>
                    {isZipFile &&  <a href={ChangeModel.getAssetUri(this.state.zip)}>Download images</a>}

                    {isExcelFile && <a href={ChangeModel.getAssetUri(this.state.excel)}>Download excel</a>}
                </p>
            </div>
        )
    }
}

ChangeExport.defaultProps = {};

export default ChangeExport;