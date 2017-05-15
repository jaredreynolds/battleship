import React from 'react';

class Square extends React.Component {
    onClick = () => {
        this.props.onClick(this.props.squareKey);
    }

    render() {
        let classNames = "square" + (this.props.hit !== undefined ? this.props.hit ? ' hit' : ' miss' : '')
        return (
            <div className={classNames} onClick={this.onClick}>
                {/*{this.props.ship}*/}
            </div>
        );
    }
}

export default Square
