import SingleComment from './SingleComment';
import { useState } from 'react';
import { commentCreate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

function Comments(props) {
    // console.log('comments props >>', props);
    const [textComment, setTextComment] = useState('');
    const comments = useSelector((state) => {
        console.log('redux state >>', state);
    });
    const dispatch = useDispatch();

    const handleInput = (e) => {
        console.log('input >>', e.target.value);
        setTextComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    };

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            <SingleComment />
        </div>
    );
}

export default Comments;
