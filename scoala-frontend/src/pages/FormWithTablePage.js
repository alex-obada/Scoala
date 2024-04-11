import React from "react";
import { Box } from "@mui/material";
import TabelElevi from "../components/TabelElevi";

const FormWithTablePage = ({ form }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: 2,
        m: 4,
      }}
    >
      {form}
      <TabelElevi />
    </Box>
  );
};

export default FormWithTablePage;
