import React from "react";
import { useParams } from "react-router-dom";
import UserList from "../shared/UserData";
import "./Details.css";

function Details() {
  const params = useParams();
  if (params.id) {
    return (
      <>
        <ul>
          {UserList.filter((x) => x.id === parseInt(params.id)).map((y) => (
            <div className="card" key={y.id}>
              <h1>{y.id}</h1>
              <h1>{y.contact}</h1>
              <h1>{y.email}</h1>
            </div>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <div>Hello</div>
      </>
    );
  }
}

export default Details;
