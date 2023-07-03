import React, { useState } from "react";
import UserList from "../shared/UserData";
import { Link } from "react-router-dom";
function Home() {
  const [id, setId] = useState();
  const handleClick = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      {UserList.map((i) => (
        <ul>
          <Link to={`/details/${i.id}`} onClick={handleClick} value={i.id}>
            <li>{i.name}</li>
          </Link>
        </ul>
      ))}
    </>
  );
}
export default Home;
