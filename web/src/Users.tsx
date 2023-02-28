import React, { useState, useRef } from 'react';

const Users: React.FC<{}> = () => {
  const [data, setData] = useState<string>('');
  const allUsers = () => {
    (async () => {
      const res = await fetch('/users');
      const data = await res.json();
      setData(() => JSON.stringify(data));
    })();
  };

  const userById = () => {
    (async () => {
      const res = await fetch(`/users/${userId.current.value}`);
      const data = await res.json();
      setData(() => JSON.stringify(data));
    })();
  };

  async function postData(path: string, body: any) {
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.text();
    setData(() => data);
  }

  const createUser = () => {
    postData('/users', {
      username: username.current.value,
      email: email.current.value,
    });
  };

  const updateUser = () => {
    postData(`/users/${updateuUerId.current.value}`, {
      username: updateUserName.current.value,
      email: updateEmail.current.value,
    });
  };

  const deleteUser = () => {
    (async () => {
      const res = await fetch(`users/${deleteUserId.current.value}`, {
        method: 'DELETE',
      });
      const data = await res.text();
      setData(() => data);
    })();
  };

  const userId = useRef<HTMLInputElement>(null!);
  const username = useRef<HTMLInputElement>(null!);
  const email = useRef<HTMLInputElement>(null!);
  const updateuUerId = useRef<HTMLInputElement>(null!);
  const updateUserName = useRef<HTMLInputElement>(null!);
  const updateEmail = useRef<HTMLInputElement>(null!);
  const deleteUserId = useRef<HTMLInputElement>(null!);

  return (
    <div>
      <button onClick={allUsers}>Get All Users</button>
      <div>
        <button onClick={userById}>Get User By ID</button>
        <input ref={userId} type="number"></input>
      </div>
      <div>
        <button onClick={createUser}>Create User</button>
        Name:<input ref={username} type="text"></input>
        E-Mail:<input ref={email} type="mail"></input>
      </div>
      <div>
        <button onClick={updateUser}>Update User</button>
        ID:<input ref={updateuUerId} type="number"></input>
        Name:<input ref={updateUserName} type="text"></input>
        E-Mail:<input ref={updateEmail} type="mail"></input>
      </div>
      <div>
        <button onClick={deleteUser}>Delete User By ID</button>
        <input ref={deleteUserId} type="number"></input>
      </div>
      <div>Result: {data}</div>
    </div>
  );
};

export default Users;
