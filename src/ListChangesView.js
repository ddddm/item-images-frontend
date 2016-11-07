import React from 'react';

function ListChangesView(props) {
    return (
        <div>
            <h2>{props.changes.length} changes</h2>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Items in change</th>
                </tr>
                </thead>
                <tbody>
                {props.changes && props.changes.map((change) => {
                    const createdAt = new Date(change.createdAt).toString();

                    return (
                        <tr key={change.id}>
                            <td>{change.id}</td>
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

export default ListChangesView