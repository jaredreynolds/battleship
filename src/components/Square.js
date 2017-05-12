import React from 'react';

export default function Square(props) {
    return (
        <div className="square">
            {props.indexLetter + (props.rowIndex + 1)}
        </div>
    );
}
