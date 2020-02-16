import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Room from "../components/Room";
import Title from "../components/Title";

const FaturedRoom = () => {
  const { roomData } = useContext(RoomContext);
  const { featuredRooms, loading } = roomData;
  const fRooms = featuredRooms.map(fRoom => {
    return <Room key={fRoom.id} fRoom={fRoom} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : fRooms}
      </div>
    </section>
  );
};

export default FaturedRoom;
