import React from "react";
import { useParams } from "react-router-dom";
import UserList from "../shared/UserData";
function Details(props) {
  const id = props.id;
  return (
    <div>
      {UserList.map((i) => (
        <ul>
          <li>
            <h6>
              {i.contact}
              {i.email}
            </h6>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Details;
