import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import { useEffect } from "react";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0",
      }}
    >
      {/* Display a header text for PRODUCTS section.  Header is a h3 */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          marginBottom: "1rem",
        }}
      >
        PRODUCTS
      </Typography>

      {/* Loop over the products array and display each product */}
      {products.map((product, idx) => {
        return (
          <Box
            key={`product-${idx}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "1rem",
              border: "1px solid grey",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            >
              {product.name} - ${product.price}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            >
              In-Stock: {product.inStock}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={product.inStock === 0}
              onClick={() => dispatch(addToCartInServer(product))}
            >
              Add to Cart
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Products;
