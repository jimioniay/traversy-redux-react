import React from 'react';

export default function PostItemContainer({ title, body }) {
  return (
    <div className="media text-white mb-4">
      <img
        className="align-self-start mr-3"
        src="http://via.placeholder.com/125x125"
        alt="Generic placeholder image"
      />
      <div className="media-body">
        <h5 className="mt-0">{title}</h5>
        <p>{body}</p>
      </div>
    </div>
  );
}
