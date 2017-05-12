const createGrid = () => {
    let grid = new Array(10)
    for (let y = 0; y < 10; y++) {
        let row = {
            index: y,
            columns: new Array(10)
        }
        grid[y] = row
        for (let x = 0; x < 10; x++) {
            row.columns[x] = {
                index: x,
                indexLetter: String.fromCharCode(65 + x),
                rowIndex: row.index
            }
        }
    }

    return grid
}

const gridReducer = (state, action) => {
    if (!state) {
        state = createGrid()
    }

    switch (action.type) {
        default:
            return state;
    }
}

export default gridReducer
