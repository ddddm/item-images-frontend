/**
 * Created by dima on 16.11.16.
 */
import React from 'react';

const ListItems = (props) => (
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
        {props.items && props.items.map((item) => {
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
)

export default ListItems;
