import { Box, Typography, Button, Dialog, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateProduct, deleteProduct } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import { useState, useEffect } from "react";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleOpen = () => {
    setCurrentProduct(null);
    setOpen(true);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  };

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
      <Typography
        variant="h2"
        align="center"
        sx={{
          marginBottom: "1rem",
        }}
      >
        PRODUCTS
      </Typography>

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
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleEdit(product)}
            >
              Update
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDelete(product)}
            >
              Delete
            </Button>
          </Box>
        );
      })}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {currentProduct ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Product Description"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Product Price"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="inStock"
            label="Product In Stock"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={currentProduct ? handleUpdate : handleAdd}
            color="primary"
          >
            {currentProduct ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Products;
