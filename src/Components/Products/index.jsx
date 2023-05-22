import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";

// Define the Products component. The products component receives 'products' as a prop, which is just an array of products.
const Products = ({ products }) => {
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
          <Typography
            key={`product-${idx}`}
            variant="body1"
            sx={{
              marginBottom: "0.5rem",
            }}
          >
            {product.name} - ${product.price} - In-Stock: {product.inStock}
          </Typography>
        );
      })}
    </Box>
  );
};

// mapStateToProps is a function that lets you create props that are linked to the Redux store.
// Here, you're creating one prop - products - and linking it to the relevant data in the Redux store.
const mapStateToProps = ({ categories }) => {
  return {
    products: categories.products,
  };
};

// The Products component is connected to the Redux store using the 'connect' function from 'react-redux'.
// mapStateToProps is passed as an argument to 'connect' to create the connected component.
export default connect(mapStateToProps)(Products);
