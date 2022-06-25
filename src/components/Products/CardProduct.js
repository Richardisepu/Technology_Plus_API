import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { getCookie } from "../../utils/cookies";
import {
  addNewCartService,
  addNewProductToCartService,
} from "../../services/cartServices";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import accounting from "accounting";

export default function CardProduct({ product }) {
  const {
    productName,
    image,
    price,
    // description,
    brandName,
    // categoryName,
  } = product;
  const dispatch = useStateValue()[1];

  const addToCart = async () => {
    const cartId = getCookie("cartId");

    if (cartId) {
      await addNewProductToCartService(cartId, product);
    } else {
      await addNewCartService(product);
    }

    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: product,
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" image={image} alt={productName} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {brandName}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {`$ ${accounting.formatNumber(price)}`}
        </Typography>
      </CardContent>

      <center>
        <Button variant="contained" onClick={addToCart}>
          Añadir al carrito
        </Button>
      </center>

      <CardActions />
    </Card>
  );
}
