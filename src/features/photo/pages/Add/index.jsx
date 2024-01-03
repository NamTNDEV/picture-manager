import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./Add.scss";

function Add() {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => {
            console.log("Form submit: ", values);
          }}
        />
      </div>
    </div>
  );
}

export default Add;
