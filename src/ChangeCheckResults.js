/**
 * Created by dima on 10.11.16.
 */

import React from 'react';
import { Table } from 'elemental';

const ChangeCheckResults = (props) => {
    const { checkResults } = props;

    return (
        <div>
          <h3>Results for this change</h3> 
          <Table>
            <tbody>
            {
                Object.keys(
                    checkResults.stats
                )
                    .map(stat => {
                        const resultLabel = stat;
                        const resultValue = checkResults.stats[stat];

                        return (
                          <tr key={resultLabel}>
                            <td><label>{resultLabel}</label></td>
                            <td>{resultValue}</td>
                          </tr>
                        )
                    } )

            }
            </tbody>
          </Table>
        </div>
    )
}

export default ChangeCheckResults
