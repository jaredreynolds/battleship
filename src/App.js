import React, { Component } from 'react'
// import Row from './components/Row'
import GridContainer from './containers/GridContainer'
import './App.css';

class App extends Component {
    // constructor() {
    //     super()

    //     let grid = {}
    //     for (let y = 0; y < 10; y++) {
    //         let row = {
    //             index: y,
    //             columns: {}
    //         }
    //         grid[y] = row
    //         for (let x = 0; x < 10; x++) {
    //             row.columns[x] = {
    //                 index: x,
    //                 indexLetter: String.fromCharCode(65 + x),
    //                 rowIndex: row.index
    //             }
    //         }
    //     }

    //     this.state = {
    //         grid
    //     }
    // }

    render() {
        return (
            <GridContainer />
        );
    }
}

export default App;
