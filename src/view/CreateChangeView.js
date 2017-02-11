/**
 * Created by dima on 07.11.16.
 */

import React, {Component} from 'react';
import UploadChange from '../UploadChange'
import ChangeCheckResults from '../ChangeCheckResults'
import ChangeModel from '../ChangeModel'
import { Row, Col, ButtonGroup, Button } from 'elemental';
import './CreateChangeView.css';

class CreateChangeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testResultFileUri: null,
            testSucceeded: false,
            modes: [{
              type: 'create',
              name: 'Create change'
            }, {
              type: 'test',
              name: 'Test change'
            }],
            currentMode: 'test'
        };

        this.checkChange = this.checkChange.bind(this);
        this.createChange = this.createChange.bind(this);
        this.switchMode = this.switchMode.bind(this);
    }

    switchMode(mode) {
      this.setState({
        currentMode: mode.type
      })
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
        const { checkResults, createResults, modes, currentMode } = this.state;
        const isModeActive = mode => mode.type === currentMode;

        return (
            <div className='CreateChangeView'>
                <h2>New change</h2>
                <Row className='CreateChangeView__modeSelector'>
                  <Col sm='100%'>
                    <ButtonGroup>
                      {modes.map( (mode, i) => {
                        return (<Button onClick={e => {
                          this.switchMode(mode)
                        }}  key={i} isActive={isModeActive(mode)} type="default">{mode.name}</Button>)
                      })}
                    </ButtonGroup>
                  </Col>
                </Row>


                { currentMode === 'test'? <Row>
                  <Col xs='100%' sm='50%'>

                    <UploadChange label='Upload and test' onSubmit={this.checkChange}/>
                  </Col>
                  <Col xs='100%' sm='50%'>
                    {checkResults &&  <ChangeCheckResults checkResults={checkResults} />}
                  </Col>
                </Row> : null }

                { currentMode === 'create'? <Row>
                  <Col xs='100%' sm='50%'>
                    <UploadChange label='Upload and create' onSubmit={this.createChange}/>
                  </Col>
                  <Col xs='100%' sm='50%'>
                    {createResults &&  <ChangeCheckResults checkResults={createResults} />}
                  </Col>
                </Row> : null }
            </div>
        )
    }
}

export default CreateChangeView;
