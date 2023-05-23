import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      // sx={{
      //   backgroundColor: "white",
      // }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            sx={{
              color: "black",
            }}
          >
            OUR STORE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

// Newbie notes
// AppBar component from Material UI that acts as a container for the header.
// It has a static position; it won't move when you scroll.
// The sx prop is used to apply styling. Here, it's setting the background color to white.
// The Container component from Material UI centers the content and ensures proper padding.
// The Toolbar component from Material UI makes sure the contents are properly aligned.
// The disableGutters prop removes the horizontal padding from the toolbar.
// The Typography component from Material UI is for text styling, even though it's not really used yet.
// The variant prop is used to apply a specific style from the theme, in this case a h3 header.
// The sx prop is used again for inline styling. Here, it's setting the color of the text to black.