import { connect } from 'react-redux';

function Likes(props) {
    console.log('render >', props);
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>🖤 {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log('mapStateToProps >', state);
    const { likesReducer } = state;
    return {
        // likes: state.likes,
        likes: likesReducer.likes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        },
        onDecrementLikes: () => {
            const action = { type: 'DECREMENT' };
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
