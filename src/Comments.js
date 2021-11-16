import SingleComment from './SingleComment';
import { useState } from 'react';

function Comments(props) {
    // console.log('comments props >>', props);
    const [textComment, setTextComment] = useState('');

    const handleInput = (e) => {
        console.log('input >>', e.target.value);
        setTextComment(e.target.value);
    };

    return (
        <div className='card-comments'>
            <form className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            <SingleComment />
        </div>
    );
}

export default Comments;
