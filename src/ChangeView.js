/**
 * Created by dima on 05.11.16.
 */

import React, {Component} from 'react';
import ChangeExport from './ChangeExport';


class ChangeView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}
    }
    componentWillMount() {
        const changeId = this.props.params.changeId;

        fetch(`http://localhost:8090/api/changes/${changeId}`)
            .then((response)=>{
                return response.json()
            })
            .then((changes) => {
                this.setState({
                    change: changes.result
                })
            })
    }
    render() {
        const {change} = this.state;
        return (
            <div>
                <h2>Change id:{change && change.id}</h2>
                <p>Change id {change && change.id}, created at {change && new Date(change.createdAt).toString()}</p>
                <ChangeExport />
                <table>
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Image file name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {change && change.Items && change.Items.map((item) => {
                        return (
                            <tr key={item.code}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.image_file}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )    
    }
    
}

export default ChangeView;