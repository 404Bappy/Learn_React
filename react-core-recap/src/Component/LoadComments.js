import React, { useEffect, useState } from 'react';
import ShowComment from './ShowComment';

const LoadComments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className='Person'>
            <h3>Usser Comments : </h3>
            {/* {
                comments.map(comment => <ShowComment title={comment.postId} body={comment.body}  ></ShowComment>)
            } */}
        </div>
    );
};

export default LoadComments;