import { ActionTypes } from '../actions'

const createGrid = () => {
    let grid = new Array(10)
    for (let y = 0; y < 10; y++) {
        let row = {
            index: y,
            columns: new Array(10)
        }
        grid[y] = row
        for (let x = 0; x < 10; x++) {
            let indexLetter = String.fromCharCode(65 + x)
            row.columns[x] = {
                index: x,
                indexLetter,
                squareKey: indexLetter + row.index,
                rowIndex: row.index,
                ship: false
            }
        }
    }

    return grid
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const addShips = (grid) => {
    let ships = [
        { name: 'carrier', length: 5 },
        { name: 'battleship', length: 4 },
        { name: 'cruiser', length: 3 },
        { name: 'submarine', length: 3 },
        { name: 'destroyer', length: 2 }
    ]

    ships.forEach(ship => {
        let axis, dir, startX, startY, endX, endY

        while (true) {
            axis = getRandomInt(0, 2)
            dir = getRandomInt(0, 2) === 1 ? 1 : -1
            startX = getRandomInt(0, 10)
            startY = getRandomInt(0, 10)
            if (axis === 0) {
                endX = startX + (ship.length * dir)
                endY = startY
                if (endX < 0 || endX >= 10) continue;
            } else {
                endY = startY + (ship.length * dir)
                endX = startX
                if (endY < 0 || endY >= 10) continue;
            }

            let squares = axis === 0
                ? grid[startY].columns.slice(Math.min(startX, endX), Math.max(startX, endX))
                : grid.slice(Math.min(startY, endY), Math.max(startY, endY)).map(r => r.columns[startX])

            if (squares.some(square => square.ship)) continue;

            squares.forEach(square => square.ship = ship.name.slice(0, 2));
            break;
        }
    }, this);
}

const gridReducer = (state, action) => {
    if (!state) {
        state = createGrid()
        addShips(state)
    }

    switch (action.type) {
        case ActionTypes.Fire:
            let column = action.squareKey[0].charCodeAt(0) - 65
            let row = parseInt(action.squareKey[1], 10)

            let newGrid = Object.assign({}, state)
            let square = newGrid[row].columns[column]
            square.hit = square.ship
            return newGrid
        default:
            return state;
    }
}

export default gridReducer
