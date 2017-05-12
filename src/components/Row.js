import React from 'react';
import Square from './Square';

export default function Row(props) {
    return (
        <div className="row">
            {Object.values(props.squares).map(square =>
                <Square key={square.indexLetter + square.rowIndex} {...square} />
            )}
        </div>
    )
}
