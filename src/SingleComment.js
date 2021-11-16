const SingleComment = ({ data }) => {
    const { text, id } = data;
    return (
        <form className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type='text' />
            <input type='submit' hidden />
        </form>
    );
};

export default SingleComment;
