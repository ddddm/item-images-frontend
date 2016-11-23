import React, {Component} from 'react';
import ViButton from './ViButton'
import ChangeModel from './ChangeModel'

import './ViChangeAssetDownload.css'

const ViChangeDownloadButton = ({onClick, label, type}) =>{
    return (
        <ViButton label={label} onClick={() => {
            onClick(type)
        }}/>
    )
}

class ViChangeAssetDownload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            assetUri: null
        }

        this.onAssetRequested = this.onAssetRequested.bind(this)
    }

    onAssetRequested(type) {
        this.setState({loading: true})

        const { changeId } = this.props;

        ChangeModel.exportAsset(changeId, type)
            .then((filePath) => {
                this.setState({
                    assetUri: filePath,
                    loading: false
                })
            })
    }

    render() {
        const { assetUri } = this.state;
        const { type } = this.props;
        return (
            <div className="ViChangeAssetDownload">
                <ViChangeDownloadButton onClick={this.onAssetRequested} type={type} label={`Export ${type}`}/>
                {assetUri &&  <div className="ViChangeAssetDownload-assetDownloadButtonWr">
                    <a className="ViChangeAssetDownload-assetDownloadButton" href={assetUri}>Download {type}</a>
                </div>}
                {this.state.loading &&  <div className="ViChangeAssetDownload-assetDownloadButtonWr">Loading...</div>}
            </div>
        )
    }
}

export default ViChangeAssetDownload
