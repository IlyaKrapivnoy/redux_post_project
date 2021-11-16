import { useEffect, useState } from 'react';
import { commentUpdate, commentDelete } from './redux/actions';
import { useDispatch } from 'react-redux';

function SingleComment({ data }) {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;

    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit comment text >>', commentText);
        dispatch(commentUpdate(commentText, id));
    };

    const handleDelete = (e) => {
        console.log('click');
        e.preventDefault();
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
            <div className='comments-item-delete' onClick={handleDelete}>
                &times;
            </div>
            <input type='text' value={commentText} onChange={handleInput} />
            <input type='submit' hidden />
        </form>
    );
}

export default SingleComment;
