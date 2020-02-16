import React, { createContext, useState, useEffect } from "react";
import items from "./data";

const RoomContext = createContext();
const RoomProvider = props => {
  const [roomData, setRoomData] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  });

  // getData
  useEffect(() => {
    let rooms = formateData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    // console.log(featuredRooms);

    setRoomData({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false
    });
  }, []);

  // Data Formate for Rooms State
  const formateData = items => {
    let tempsItemps = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempsItemps;
  };

  // Get Featured Rooms
  const getFroom = slug => {
    let tempFrooms = roomData.rooms && [...roomData.rooms];
    const singleFroom = tempFrooms.find(
      singleFroom => singleFroom.slug === slug
    );
    return singleFroom;
  };

  return (
    <RoomContext.Provider value={{ roomData, getFroom }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };
