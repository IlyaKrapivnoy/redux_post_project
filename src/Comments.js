import SingleComment from './SingleComment';
import { useEffect, useState } from 'react';
import { commentCreate, commentsLoad } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
// import { commentsReducer } from './redux/commentsReducer';

function Comments(props) {
    // console.log('comments props >>', props);
    const [textComment, setTextComment] = useState('');
    const comments = useSelector((state) => {
        console.log('redux state >>', state);
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });
    console.log('redux comments >>', comments);

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

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            {!!comments.length &&
                comments.map((res) => {
                    return <SingleComment key={res.id} data={res} />;
                })}
        </div>
    );
}

export default Comments;
