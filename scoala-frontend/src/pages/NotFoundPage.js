import React from "react";
import { Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 4,
      }}
    >
      <h1>Pagina nu a fost gasita</h1>
    </Box>
  );
};

export default NotFoundPage;
