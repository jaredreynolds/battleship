import { connect } from 'react-redux'
import Grid from '../components/Grid'
import { ActionTypes } from '../actions'

const mapStateToProps = (state) => {
    return {
        rows: state.grid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFire: squareKey => {
            dispatch({
                type: ActionTypes.Fire,
                squareKey
            })
        }
    }
}

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid)

export default GridContainer
