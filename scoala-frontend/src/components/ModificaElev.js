import {
  Button,
  Paper,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DbContext } from "../App";

const ModificaElev = () => {
  const [values, setValues] = useState({
    id: "",
    nume: "",
    prenume: "",
    dataNasterii: "",
    specializare: "",
    media: "",
  });

  const { putElev, Specializare } = useContext(DbContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Paper
      component="form"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        putElev(values);
      }}
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
        Modifica Elev
      </Typography>
      <TextField
        required
        variant="outlined"
        fullWidth
        label="Id"
        name="id"
        value={values.id}
        onChange={handleChange}
      />
      <TextField
        required
        variant="outlined"
        fullWidth
        label="Nume"
        name="nume"
        value={values.nume}
        onChange={handleChange}
      />

      <TextField
        required
        variant="outlined"
        fullWidth
        label="Prenume"
        name="prenume"
        value={values.prenume}
        onChange={handleChange}
      />

      <TextField
        required
        variant="filled"
        label="Data Nasterii"
        name="dataNasterii"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={values.dataNasterii}
        onChange={handleChange}
      />

      <Autocomplete
        fullWidth
        options={Object.keys(Specializare).map((x) => Specializare[x])}
        onChange={(e, newValue) =>
          setValues({ ...values, specializare: newValue })
        }
        getOptionDisabled={(option) => option === "Toate"}
        renderInput={(params) => (
          <TextField {...params} required label="Specializare" />
        )}
      />
      <TextField
        required
        variant="outlined"
        label="Media"
        fullWidth
        name="media"
        value={values.media}
        onChange={handleChange}
      />

      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Modifica Elev
      </Button>
    </Paper>
  );
};

export default ModificaElev;
