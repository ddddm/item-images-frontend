/**
 * Created by dima on 05.11.16.
 */

import React, {Component} from 'react';
import {Row, Col} from 'elemental';
import ChangeExport from '../ChangeExport';
import ListItems from '../ListItems'
import ChangeModel from '../ChangeModel'


class ChangeView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const changeId = this.props.params.changeId;

        ChangeModel.findOne(changeId)
            .then((change) => this.setState({
                change: change
            }))
    }

    render() {
        const {change} = this.state;

        if(!change) return null;

        return (
            <Row>
                <Col sm='1'>
                    <h2>Change</h2>
                    <p>Change id {change.id}, created at {new Date(change.createdAt).toString()}</p>

                </Col>
                <Col sm="1">

                    <ChangeExport changeId={change.id} />

                </Col>
                <Col basis="100%">
                    <ListItems items={change.Items} />
                </Col>
            </Row>
        )    
    }
    
}

export default ChangeView;