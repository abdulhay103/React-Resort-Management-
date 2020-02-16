import React, { useContext, useEffect } from "react";
import { RoomContext } from "../Context";

const About = () => {
  let { roomData, setRoomData } = useContext(RoomContext);
  const { featuredRooms, loading } = roomData;
  console.log(loading);

  return (
    <div>
      <h1>Hello From About Page</h1>
      <h3>Working 8 Months</h3>
      {/* <h2>{featuredRooms.map}</h2> */}
    </div>
  );
};
export default About;
