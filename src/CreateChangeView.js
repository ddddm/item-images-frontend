/**
 * Created by dima on 07.11.16.
 */

import React, {Component} from 'react';
import UploadChange from './UploadChange'
import ChangeCheckResults from './ChangeCheckResults'
import ChangeModel from './ChangeModel'

class CreateChangeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testResultFileUri: null,
            testSucceeded: false
        };

        this.checkChange = this.checkChange.bind(this);
        this.createChange = this.createChange.bind(this);
    }

    checkChange(data) {
        ChangeModel.check(data)
            .then(checkResults => {
                this.setState({
                    checkResults
                })
            })
    }

    createChange(data) {
        ChangeModel.create(data)
            .then(createResults => {
                this.setState({
                    createResults
                })
            })
    }

    render() {
        const { checkResults, createResults } = this.state;

        return (
            <div>
                <h2>Test change</h2>
                <UploadChange label='Upload and test' onSubmit={this.checkChange}/>

                {checkResults &&  <ChangeCheckResults checkResults={checkResults} />}

                <h2>Create new change</h2>
                <UploadChange label='Upload and create' onSubmit={this.createChange}/>

                {createResults &&  <ChangeCheckResults checkResults={createResults} />}
            </div>
        )
    }
}

export default CreateChangeView;