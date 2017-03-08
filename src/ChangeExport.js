/**
 * Created by dima on 06.11.16.
 */

import React, {Component} from 'react'
import ViChangeAssetDownload from './ViChangeAssetDownload';


class ChangeExport extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>

                <ViChangeAssetDownload
                    type="zip"
                    changeId={this.props.changeId}
                />
                <ViChangeAssetDownload
                    type="zip?type=web"
                    changeId={this.props.changeId}
                />
                <ViChangeAssetDownload
                    type="excel"
                    changeId={this.props.changeId}
                />


            </div>
        )
    }
}

ChangeExport.defaultProps = {};

export default ChangeExport;
