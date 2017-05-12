import { connect } from 'react-redux'
import Grid from '../components/Grid'

const mapStateToProps = (state) => {
    return {
        rows: state.grid
    }
}

const GridContainer = connect(
    mapStateToProps
    // mapDispatchToProps
)(Grid)

export default GridContainer
