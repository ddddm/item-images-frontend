/**
 * Created by dima on 16.11.16.
 */
import React from 'react';
import {Table} from 'elemental'

const ListItems = (props) => (
    <Table>
        <colgroup>
            <col width="5%" />
            <col width="40%" />
            <col width="15%" />
            <col width="40%" />
        </colgroup>
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
    </Table>
)

export default ListItems;
