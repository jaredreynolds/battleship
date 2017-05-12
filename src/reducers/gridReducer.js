const gridReducer = (state, action) => {
    if (!state) {
        let grid = {}
        for (let y = 0; y < 10; y++) {
            let row = {
                index: y,
                columns: {}
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

        state = grid
    }

    switch (action.type) {
        default:
            return state;
    }
}

export default gridReducer
