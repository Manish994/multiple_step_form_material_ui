import React from "react";

function Finished({ state }) {
  const { data } = state;
  return (
    <>
      <h2>First Name :{data.firstname}</h2>
      <br></br>
      <h2>Last Name : {data.lastname}</h2>
      <br></br>
      <h2>Gender : {data.gender}</h2>
      <br></br>
      <h2>Email : {data.firstname}</h2>
      <br></br>
      <h2>phonenumber: {data.phonenumber}</h2>
      <br></br>
      <h2>address: {data.address}</h2>
      <br></br>
      <h2>country: {data.country}</h2>
      <br></br>
      <h2>salary: {data.salary}</h2>
      <br></br>
      <h2>year: {data.year}</h2>
      <br></br>
      <h2>location: {data.location}</h2>
      <br></br>
      <h2>drink: {data.drink}</h2>
      <br></br>

      <br></br>
    </>
  );
}

export default Finished;
