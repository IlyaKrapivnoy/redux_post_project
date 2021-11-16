import { COMMENT_CREATE } from './types';

const initialState = {
    comments: [],
};

export const commentsReducer = (state = initialState, action) => {
    console.log('comments reducer >', action);

    return state;

    // switch (action.type) {
    //     case COMMENT_CREATE:
    //         return {
    //             ...state,
    //             text: action.text,
    //         };

    //     default:
    //         return state;
    // }
};
