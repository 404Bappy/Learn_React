import React from 'react';

const ShowComment = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    );
};

export default ShowComment;