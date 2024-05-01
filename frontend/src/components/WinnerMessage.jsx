import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

export const WinnerMessage = ({ name }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        my={4}
        display="flex"
        justifyContent="flex-start"
        p={2}
        sx={{
          border: "2px solid grey",
          boxShadow: "-3px 3px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "4px",
          backgroundColor: theme.palette.backgroundMessage,
          width: "100%"
        }}
      >
        <Typography variant="h6">{name} wins!</Typography>
      </Box>
    </Box>
  );
};

WinnerMessage.propTypes = {
  name: PropTypes.string
};
