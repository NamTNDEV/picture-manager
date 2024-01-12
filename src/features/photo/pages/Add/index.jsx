import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./Add.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/photo/photoSlice";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isEditMode = !!photoId;
  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  const initialValues = !isEditMode
    ? {
        title: "",
        category: null,
        photo: "",
      }
    : editPhoto;

  const handleSubmit = (values) => {
    if (isEditMode) {
      const action = updatePhoto(values);
      dispatch(action);
      navigate("/");
    } else {
      values = { id: photos.length, ...values };
      const action = addPhoto(values);
      dispatch(action);
      navigate("/");
    }
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isEditMode={isEditMode}
        />
      </div>
    </div>
  );
}

export default Add;
