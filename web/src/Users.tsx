import React, {useState, useRef} from "react"

const Users: React.FC<{}> = () => {
  const [data, setData] = useState<string>('');
  const allUsers = () => {
    (async() => {
      const res = await fetch("/users")
      const data = await res.json()
      setData(() => JSON.stringify(data) );
    })()
  }

  const userById = () => {
    (async() => {
      const res = await fetch(`/users/${userId.current.value}`)
      const data = await res.json()
      console.log(data);
      setData(() => JSON.stringify(data) );
    })()
  }

  const userId = useRef<HTMLInputElement>(null!);


  return (
    <div>
      <button onClick={allUsers}>Get All Users</button>
      <div>
        <button onClick={userById}>Get User By ID</button>
        <input ref={userId} type="number"></input>
      </div>
      <div>Result: {data}</div>
    </div>
  );
}

export default Users;