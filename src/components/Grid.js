import React from 'react'
import Row from './Row'

export default function Grid({rows, onFire}) {
    return (
        <div className="grid">
            {Object.values(rows).map(row =>
                <Row key={row.index} squares={row.columns} onFire={onFire} />
            )}
        </div>
    )
}
