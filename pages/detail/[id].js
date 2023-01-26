import React, { useState } from "react";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments/" + id
  );
  const data = await res.json();

  return {
    props: {
      comment: data,
    },
  };
}

export default function DetailComment({ comment }) {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-3/4'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>Detail Comment</div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <div className='text-xl font-bold'>Name: </div>
            <div className='text-xl'>{comment.name}</div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <div className='text-xl font-bold'>Email: </div>
            <div className='text-xl'>{comment.email}</div>
          </div>
          <div className='flex justify-between  mt-4'>
            <div className='text-xl font-bold'>Body: </div>
            <div className='text-xl text-right'>{comment.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
