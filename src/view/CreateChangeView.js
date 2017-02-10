/**
 * Created by dima on 07.11.16.
 */

import React, {Component} from 'react';
import UploadChange from '../UploadChange'
import ChangeCheckResults from '../ChangeCheckResults'
import ChangeModel from '../ChangeModel'
import { Row, Col } from 'elemental';

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
                <Row>
                  <Col sx='100%' sm='50%'>

                    <UploadChange label='Upload and test' onSubmit={this.checkChange}/>
                  </Col>
                  <Col sx='100%' sm='50%'>
                    {checkResults &&  <ChangeCheckResults checkResults={checkResults} />}
                  </Col>
                </Row>

                <h2>Create new change</h2>
                <Row>
                  <Col sx='100%' sm='50%'>
                    <UploadChange label='Upload and create' onSubmit={this.createChange}/>
                  </Col>
                  <Col sx='100%' sm='50%'>
                    {createResults &&  <ChangeCheckResults checkResults={createResults} />}
                  </Col>
                </Row>
            </div>
        )
    }
}

export default CreateChangeView;
