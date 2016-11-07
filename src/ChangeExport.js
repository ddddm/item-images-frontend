/**
 * Created by dima on 06.11.16.
 */

import React, {Component} from 'react'

function ChangeDownloadButton(props) {
    return (
        <button>{props.label}</button>
    )
}

class ChangeExport extends Component {
    render() {
        return (
            <div>
                <ChangeDownloadButton label='Export images'/>
                <ChangeDownloadButton label="Export change in xlsx"/>
            </div>
        )
    }
}

export default ChangeExport;