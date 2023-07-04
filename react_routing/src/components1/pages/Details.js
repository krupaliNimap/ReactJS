// import React from "react";
// import { useParams } from "react-router-dom";
// import UserList from "../shared/UserData";
// function Details() {
//   const params = useParams();
//   const list = UserList.filter((x) => {
//     if (x.id === params.id) {
//       return x.contact;
//     }
//   });
//   console.log(list);
//   return (
//     <div>
//       {params.id}
//       {list}
//     </div>
//   );
// }
// export default Details;

import React from "react";
import { useParams } from "react-router-dom";
import UserList from "../shared/UserData";

function Details(props) {
  const params = useParams();
  const filteredUsers = UserList.filter((x) => x.id === parseInt(params.id));
  if (params.id) {
    return (
      <div>
        <h2>User Details</h2>
        <p>ID: {params.id}</p>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Contact: {user.contact}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <h3>User not selected</h3>
      </>
    );
  }
}

export default Details;
