import React from "react";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

function PhotoList({ photoList, onPhotoEditClick, onPhotoRemoveClick }) {
  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
