import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import CautaElev from "./components/CautaElev";
import ModificaElev from "./components/ModificaElev";
import StergeElev from "./components/StergeElev";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants";
import FormWithTablePage from "./pages/FormWithTablePage";
import AdaugaElev from "./components/AdaugaElev";

export const DbContext = createContext();

function App() {
  const [elevi, setElevi] = useState([]);

  const getElevi = () => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => setElevi(response.data))

      .catch((error) => console.log(error));
  };

  const getEleviDupaFiltru = (_specializare, _text, _media) => {
    const params = {};
    if (_specializare) params.specializare = _specializare;
    if (_text) params.text = _text;
    if (_media) params.media = _media;

    axios
      .get(`${BASE_URL}/filtru`, { params })
      .then((response) => {
        setElevi(response.data);
      })
      .catch((error) => console.log(error));
  };

  const postElev = (elev) => {
    axios
      .post(`${BASE_URL}`, elev)
      .then((response) => getElevi())
      .catch((error) => console.log(error));
  };

  const deleteElev = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then((response) => getElevi())
      .catch((error) => console.log(error));
  };

  const putElev = (elev) => {
    axios
      .put(`${BASE_URL}/${elev.id}`, elev)
      .then((response) => getElevi())
      .catch((error) => console.log(error));
  };
  useEffect(() => getElevi(), []);
  return (
    <>
      <NavBar />
      <DbContext.Provider
        value={{
          elevi,
          setElevi,
          getElevi,
          getEleviDupaFiltru,
          putElev,
          postElev,
          deleteElev,
          Specializare: {
            Toate: "Toate",
            MateInfo: "Matematica Informatica",
            Uman: "Stiinte Umane",
            BioChimie: "Biologie Chimie",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/cauta"
            element={<FormWithTablePage form={<CautaElev />} />}
          />
          <Route
            path="/adauga"
            element={<FormWithTablePage form={<AdaugaElev />} />}
          />
          <Route
            path="/modifica"
            element={<FormWithTablePage form={<ModificaElev />} />}
          />
          <Route
            path="/sterge"
            element={<FormWithTablePage form={<StergeElev />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DbContext.Provider>
    </>
  );
}

export default App;
