import { Paper, TextField, Typography, Autocomplete } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DbContext } from "../App";

const CautaElev = () => {
  const [values, setValues] = useState({
    text: "",
    specializare: "",
    media: "",
  });

  const { getEleviDupaFiltru, Specializare } = useContext(DbContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const { text, specializare, media } = values;
    getEleviDupaFiltru(specializare, text, media);
  }, [values]);

  return (
    <Paper
      autoComplete="off"
      sx={{
        width: 350,
        minHeight: 300,
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
        Cauta Elev
      </Typography>

      <TextField
        variant="outlined"
        fullWidth
        label="Nume"
        name="text"
        value={values.text}
        onChange={handleChange}
      />

      <Autocomplete
        fullWidth
        options={Object.keys(Specializare).map((x) => Specializare[x])}
        onChange={(e, newValue) => {
          setValues({ ...values, specializare: newValue });
        }}
        renderInput={(params) => <TextField {...params} label="Specializare" />}
      />
      <TextField
        variant="outlined"
        label="Media"
        fullWidth
        name="media"
        value={values.media}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default CautaElev;
