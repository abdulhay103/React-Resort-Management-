import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { roomData } = value;
        const { loading, sortedRooms, rooms } = roomData;

        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            {/* {rooms && rooms.map((e, index) => <h1>{e.name}</h1>)} */}
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
