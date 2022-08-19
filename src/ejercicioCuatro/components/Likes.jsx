import React from 'react';

export default function Likes({likes}) {
  return (
    <div className='likes'>
        <h2>Likes totales: {likes}</h2>
    </div>
  );
};
