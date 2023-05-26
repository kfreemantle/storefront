import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categories";

const Storefront = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h2" align="center">
        Welcome to Our Store
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item key={`category-${index}`} xs={12} sm={6} md={4}>
            <Link to={`/categories/${category.name}`}>
              <Paper elevation={3}>
                <Typography variant="h5" align="center">
                  {category.displayName}
                </Typography>
                <Typography variant="body1" align="center">
                  {category.description}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Storefront;
