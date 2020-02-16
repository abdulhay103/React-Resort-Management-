import React, { useContext, useState, Fragment } from "react";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

const SingleRoom = props => {
  const { getFroom } = useContext(RoomContext);
  const [state, setstate] = useState({
    slug: props.match.params.slug,
    defaultImg
  });

  const room = getFroom(state.slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such roo could found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room ? room : "";
  const [mainImg, ...defaultAllImg] = images;

  return (
    <Fragment>
      <StyledHero img={mainImg || state.defaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultAllImg.map((allImg, index) => {
            return <img key={index} src={allImg} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} sqft</h6>
            <h6>
              max capacity : {""}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast"} </h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((extra, index) => {
            return <li key={index}>=> {extra}</li>;
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default SingleRoom;
