//import * as React from 'react';
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns}) => {
  return (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
          />
  );
}

export default DataTable