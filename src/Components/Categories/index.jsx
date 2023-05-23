import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Typography, Button, ButtonGroup } from "@mui/material";
import { setCategory, reset } from "../../store/categories";

// Define the Categories component
const Categories = () => {
  const categories = useSelector((state) => state.categories.categories); // Get categories from the Redux store
  const dispatch = useDispatch(); // Hook used to dispatch actions

  return (
    <>
      {/* Display a header text for the Categories section */}
      <Typography variant="h5" sx={{ margin: "1rem" }}>
        Browse our Categories
      </Typography>

      {/* Use a ButtonGroup to display each category as a separate button */}
      <ButtonGroup variant="text" aria-label="text button group">
        {
          // Loop over each category and create a button for it
          categories.map((category, idx) => {
            return (
              <Button
                key={`category-${idx}`}
                onClick={() => {
                  dispatch(setCategory(category)); // Set active category
                }}
              >
                {category.displayName}
              </Button>
            );
          })
        }

        {/* Add a RESET button to clear the selected category */}
        <Button onClick={() => dispatch(reset())}>RESET</Button>
      </ButtonGroup>
    </>
  );
};

export default Categories;
