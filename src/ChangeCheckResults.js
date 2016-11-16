/**
 * Created by dima on 10.11.16.
 */

import React from 'react';

const ChangeCheckResults = (props) => {
    const { checkResults } = props;

    return (
        <div>
            <h3>Change check results</h3>
            <ul>{
                Object.keys(
                    checkResults.stats
                )
                    .map(stat => {
                        const resultLabel = stat;
                        const resultValue = checkResults.stats[stat];

                        return <li key={resultLabel}>{[resultLabel, resultValue].join(': ')}</li>
                    } )

            }</ul>
        </div>
    )
}

export default ChangeCheckResults