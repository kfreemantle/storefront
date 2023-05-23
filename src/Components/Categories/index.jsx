import { connect } from "react-redux";
import { Typography, Button, ButtonGroup } from "@mui/material";
import { setCategory, filterProducts, reset } from "../../store/categories"; // Assume these action creators exist in your store

// Define the Categories component
const Categories = ({ categories, setCategory, filterProducts, reset }) => {
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
                  setCategory(category); // Set active category
                  filterProducts(); // Filter products based on active category
                }}
              >
                {category.displayName}
              </Button>
            );
          })
        }

        {/* Add a RESET button to clear the selected category */}
        <Button onClick={() => reset()}>RESET</Button>
      </ButtonGroup>
    </>
  );
};

// mapStateToProps is a function that lets you create props that are linked to the Redux store.
// Here, you're creating one prop - categories - and linking it to the relevant data in the Redux store.
const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

// mapDispatchToProps is an object that lets you create props that are linked to Redux action creators.
// These props are functions that dispatch actions when called.
// Here, you're creating two props - setCategory and reset - and linking them to the relevant action creators in the Redux store.
const mapDispatchToProps = { setCategory, filterProducts, reset };

// Connect the Categories component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
