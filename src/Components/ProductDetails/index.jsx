import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

const ProductDetails = () => {
  // Get the product ID from the URL
  const { productId } = useParams();

  // Fetch product details from the Redux store
  const product = useSelector((state) =>
    state.products.find((product) => product.id === productId)
  );

  // Render product details
  return product ? (
    <Container>
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h4">Price: {product.price}</Typography>
      <Typography variant="h5">Stock: {product.stock}</Typography>
      {/* More details can be added as needed */}
    </Container>
  ) : (
    <Typography variant="h4">Product not found</Typography>
  );
};

export default ProductDetails;
