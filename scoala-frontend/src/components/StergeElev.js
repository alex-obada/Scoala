import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DbContext } from "../App";

const StergeElev = () => {
  const [id, setId] = useState("");

  const { deleteElev } = useContext(DbContext);

  return (
    <Paper
      component="form"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        deleteElev(id);
      }}
      sx={{
        width: 350,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1,
        gap: 1,
        borderRadius: "5px",
      }}
      elevation={4}
    >
      <Typography variant="h3" align="center">
        Sterge Elev
      </Typography>
      <TextField
        required
        variant="outlined"
        fullWidth
        label="Id"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Sterge Elev
      </Button>
    </Paper>
  );
};

export default StergeElev;
