/**
 * Created by dima on 05.11.16.
 */

import React from 'react';
import ChangeExport from './ChangeExport';


function ChangeView(props) {
    return (
        <div>
            <h2>Change id:{props.change.id}</h2>
            <p>Change id {props.change.id}, created at {new Date(props.change.createdAt).toString()}</p>
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
                {props.change.Items && props.change.Items.map((item) => {
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

export default ChangeView;