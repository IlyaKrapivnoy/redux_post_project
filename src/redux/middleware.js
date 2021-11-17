import { COMMENT_CREATE } from './types';

export function spamFilter(store) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                console.log('spanFilter >>', action.data.text);
            }
            return next(action);
        };
    };
}
