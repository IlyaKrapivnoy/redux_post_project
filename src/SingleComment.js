import { useEffect, useState } from 'react';
import { commentUpdate } from './redux/actions';

function SingleComment({ data }) {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit comment text >>', commentText);
    };

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    };

    return (
        <form className='comments-item' onSubmit={handleUpdate}>
            <div className='comments-item-delete'>&times;</div>
            <input type='text' value={commentText} onChange={handleInput} />
            <input type='submit' hidden />
        </form>
    );
}

export default SingleComment;
