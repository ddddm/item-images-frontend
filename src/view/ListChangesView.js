import React, {Component} from 'react';
import {Link} from 'react-router'
import ChangeModel from '../ChangeModel'

class ListChangesView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        ChangeModel.find()
            .then((changes) => this.setState({
                changes
            }))
    }

    render() {
        const {changes} = this.state;

        return (
            <div>
                <h2>{changes && changes.length? changes.length : 'No'} changes</h2>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Date</th>
                        <th>Items in change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {changes && changes.map((change) => {
                        const createdAt = new Date(change.createdAt).toString();

                        return (
                            <tr key={change.id}>
                                <td><Link to={`/changes/${change.id}`}>{change.id}</Link></td>
                                <td><Link to={`/changes/${change.id}`}>{createdAt}</Link></td>
                                <td><Link to={`/changes/${change.id}`}>{change.itemCount}</Link></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListChangesView