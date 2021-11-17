import { COMMENT_CREATE } from './types';
import { errorOn } from './actions';

const badWords = ['suck', 'shit', 'asshole', 'fuck'];

export function spamFilter(store) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                console.log('spamFilter >>', action.data.text);
                const hasBadWords = badWords.some((res) =>
                    action.data.text.includes(res)
                );
                if (hasBadWords) {
                    return store.dispatch(errorOn('DO NOT USE BAD WORDS PLS!'));
                }
            }
            return next(action);
        };
    };
}
