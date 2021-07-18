import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import ImageMagnify from "react-image-magnify";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        {/* <Card.Img src={product.image} variant="top" /> */}
        <ImageMagnify
          className="image-container"
          enlargedImagePosition="over"
          {...{
            smallImage: {
              alt: "Product",
              isFluidWidth: true,
              src: product.image,
            },
            largeImage: {
              src: product.image,
              // width: 1200,
              width: 1400,
              // height: 1800,
              height: 2600,
            },
          }}
        ></ImageMagnify>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            // color="red"
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
