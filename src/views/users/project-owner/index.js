import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';
import { DataGrid } from '@mui/x-data-grid';

const ProjectOwnerPage = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'FirstName', headerName: 'First name', width: 130 },
    { field: 'LastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, LastName: 'Snow', FirstName: 'Jon', age: 35 },
    { id: 2, LastName: 'Lannister', FirstName: 'Cersei', age: 42 },
    { id: 3, LastName: 'Lannister', FirstName: 'Jaime', age: 45 },
    { id: 4, LastName: 'Stark', FirstName: 'Arya', age: 16 },
    { id: 5, LastName: 'Targaryen', FirstName: 'Daenerys', age: null },
    { id: 6, LastName: 'Melisandre', FirstName: null, age: 150 },
    { id: 7, LastName: 'Clifford', FirstName: 'Ferrara', age: 44 },
    { id: 8, LastName: 'Frances', FirstName: 'Rossini', age: 36 },
    { id: 9, LastName: 'Roxie', FirstName: 'Harvey', age: 65 },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ minHeight: '400px' }}>
        <Card style={{ height: '650px'}}>
          <DataTable rows={rows} columns={columns} />
        </Card>
      </Grid>
    </Grid>
  )
};

export default ProjectOwnerPage;