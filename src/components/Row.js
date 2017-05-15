import React from 'react';
import Square from './Square';

export default function Row(props) {
    return (
        <div className="row">
            {props.squares.map(square =>
                <Square key={square.squareKey} {...square} onClick={props.onFire} />
            )}
        </div>
    )
}
