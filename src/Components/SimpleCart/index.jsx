import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cart";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SimpleCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "md",
      }}
    >
      {cart.map((item, idx) => (
        <Box
          key={`cart-${idx}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100px",
          }}
        >
          <Typography>{item.name}</Typography>
          <IconButton onClick={() => dispatch(removeFromCart(idx))}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default SimpleCart;
