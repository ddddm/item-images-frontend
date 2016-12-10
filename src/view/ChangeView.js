/**
 * Created by dima on 05.11.16.
 */

import React, {Component} from 'react';
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
            <div>
                <h2>Change id:{change.id}</h2>
                <p>Change id {change.id}, created at {new Date(change.createdAt).toString()}</p>
                <ChangeExport changeId={change.id} />
                <ListItems items={change.Items} />
            </div>
        )    
    }
    
}

export default ChangeView;