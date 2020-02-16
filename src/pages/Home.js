import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FaturedRoom from "../components/FaturedRoom";
// import Button from "../components/StyledHero";

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            go to our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FaturedRoom />
    </Fragment>
  );
};

export default Home;
