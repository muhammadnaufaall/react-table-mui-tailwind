import React, { useState } from "react";

export default function CreateComment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSave = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await res.json();
    console.log(result);
    if (result != {}) {
      return alert("Success");
    }
  };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-3/4'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>Create Comment</div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <div className='text-xl font-bold'>Name: </div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border border-gray-500 rounded w-3/4 p-2'
            />
          </div>
          <div className='flex justify-between items-center mt-4'>
            <div className='text-xl font-bold'>Email: </div>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-gray-500 rounded w-3/4 p-2'
            />
          </div>
          <div className='flex justify-between  mt-4'>
            <div className='text-xl font-bold'>Body: </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='border border-gray-500 rounded w-3/4 p-2'
            />
          </div>
          <div className='flex justify-end mt-4'>
            <button
              onClick={(e) => handleSave(e)}
              className='bg-blue-500 text-white px-4 py-2 rounded'>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
