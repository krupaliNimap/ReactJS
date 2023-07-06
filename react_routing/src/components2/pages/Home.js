import React from "react";
import UserList from "../shared/UserData";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <ol className="homeContainer">
        {UserList.map((x) => (
          <li key={x.id}>
            <Link to={`/details/${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ol>
      {/* <div className="grid-container">
        <div className="grid-item grid-item-1">Grid Item 1</div>
        <div className="grid-item grid-item-2">Grid Item 2</div>
        <div className="grid-item grid-item-3">Grid Item 3</div>
        <div className="grid-item grid-item-4">Grid Item 4</div>
        <div className="grid-item grid-item-5">Grid Item 5</div>
      </div> */}
    </div>
  );
}

export default Home;
