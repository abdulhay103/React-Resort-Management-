import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";
const Rooms = () => {
  return (
    <div>
      <Fragment>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </Fragment>
    </div>
  );
};

export default Rooms;
