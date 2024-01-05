import React from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

function RandomPhoto({ name, imageUrl, onImageUrlChange, onRandomButtonBlur }) {
  const getRandomPhotoUrl = () => {
    const randomId = Math.trunc(Math.random() * 1000);
    return `http://picsum.photos/id/${randomId}/300/300`;
  };

  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomPhotoUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          name={name}
          outline
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click random again!"
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
