import React, {Component} from 'react';
import ChangeModel from './ChangeModel'
import ViFileDownload from './ViFileDownload'


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
        const { assetUri, loading } = this.state;
        const { type } = this.props;
        return (
            <ViFileDownload onClick={this.onAssetRequested} type={type} assetUri={assetUri} loading={loading} />
        )
    }
}

export default ViChangeAssetDownload
