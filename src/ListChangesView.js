import React, {Component} from 'react';
import {Link} from 'react-router'

class ListChangesView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        fetch('http://localhost:8090/api/changes')
            .then((response)=>{
                return response.json()
            })
            .then((changes) => {
                this.setState({
                    changes: changes.result
                })
            })
    }

    render() {
        const {changes} = this.state;

        return (
            <div>
                <h2>{changes && changes.length} changes</h2>
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
                                <td>{createdAt}</td>
                                <td>{change.itemCount}</td>
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