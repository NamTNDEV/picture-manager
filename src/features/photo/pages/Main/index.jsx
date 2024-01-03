import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photo/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default Main;
