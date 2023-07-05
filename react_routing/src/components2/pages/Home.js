import React from "react";
import UserList from "../shared/UserData";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <ol>
        {UserList.map((x) => (
          <li key={x.id}>
            <Link to={`/details/${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
