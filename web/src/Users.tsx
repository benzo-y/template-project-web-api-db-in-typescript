import React, { useState, useRef } from 'react';
import axios from './config/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

type User = {
  id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  createdAt: string;
  updatedAt: string;
};

const Users: React.FC<{}> = () => {
  const [data, setData] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const allUsers = () => {
    axios
      .get('users')
      .then((res: AxiosResponse<User[]>) => {
        setUsers(() => res.data);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
        setUsers(() => []);
      });
  };

  const userById = () => {
    (async () => {
      const res = await axios.get(`/users/${userId.current.value}`);
      setData(() => JSON.stringify(res.data));
    })();
  };

  async function postData(path: string, body: any) {
    const res = await axios.post(path, body);
    setData(() => JSON.stringify(res.data));
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
      const res = await axios.delete(`users/${deleteUserId.current.value}`);
      setData(() => JSON.stringify(res.data));
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
        <p>All Users</p>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
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
