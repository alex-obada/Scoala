import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { DbContext } from "../App";

const columns = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "nume", headerName: "Nume", width: 130 },
  { field: "prenume", headerName: "Prenume", width: 130 },
  { field: "dataNasterii", headerName: "Data nasterii", width: 130 },
  { field: "specializare", headerName: "Specializare", width: 130 },
  { field: "media", headerName: "Media", type: "number", width: 90 },
];

const TabelElevi = () => {
  const { elevi } = useContext(DbContext);
  return (
    <div style={{ height: 400, width: "70%" }}>
      <DataGrid
        rows={elevi}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default TabelElevi;
