import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/photo/components/PhotoList";
import { removePhoto } from "features/photo/photoSlice";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photos = useSelector((state) => state.photos);

  const handlePhotoEditClick = (photo) => {
    navigate(`/photo/${photo.id}`);
  };

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photo/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default Main;
