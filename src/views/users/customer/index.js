import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const CustomerPage = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Customer ID', width: 100 },
    { field: 'UserName', headerName: 'User Name', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'region', headerName: 'Region', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'balance', headerName: 'Balance', width: 90 },
  ];

  const rows = [
    { id: 1, UserName: 'Snow', gender: 'Male', region: 'Beijing', age: 35, balance: 100 },
    { id: 2, UserName: 'Lannister', gender: 'Bigender', region: 'Shanghai', age: 42, balance: 50 },
    { id: 3, UserName: 'Jaime', gender: 'Female', region: 'Shenzhen', age: 45, balance: 0 },
    { id: 4, UserName: 'Stark', gender: 'Androgynous', region: 'Guangdong', age: 16, balance: 10 },
    { id: 5, UserName: 'Targaryen', gender: 'Male', region: 'Tianjin', age: 18, balance: 25 },
    { id: 6, UserName: 'Melisandre', gender: 'Female', region: 'Guangdong', age: 150, balance: 45 },
    { id: 7, UserName: 'Clifford', gender: 'Female', region: 'Hubei', age: 44, balance: 60 },
    { id: 8, UserName: 'Frances', gender: 'Male', region: 'Fujian', age: 36, balance: 10 },
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

export default CustomerPage;