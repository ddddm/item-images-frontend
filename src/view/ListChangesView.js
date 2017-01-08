import React, {Component} from 'react';
import {Link} from 'react-router'
import ChangeModel from '../ChangeModel'
import {Table} from 'elemental';

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
                <Table>
                    <colgroup>
                        <col width="5%" />
                        <col width="40%" />
                        <col width="55%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Creation date</th>
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
                </Table>
            </div>
        )
    }
}

export default ListChangesView