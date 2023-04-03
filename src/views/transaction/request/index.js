import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const RequestDefault = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Project Owner ID', width: 130 },
    { field: 'DateTime', headerName: 'Request Time', width: 130 },
    { field: 'Sell_Name', headerName: 'Region', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
  ];
  
  const rows = [
    { id: '1', DateTime: '03/03/2023', Sell_Name: 'Guangzhou', status: 'pending'},
    { id: '2', DateTime: '03/03/2023', Sell_Name: 'Shenzhen', status: 'pending'},
    { id: '3', DateTime: '03/03/2023', Sell_Name: 'Beijing', status: 'pending'},
    { id: '4', DateTime: '03/03/2023', Sell_Name: 'Shanghai', status: 'failed'},
    { id: '5', DateTime: '03/03/2023', Sell_Name: 'Hubei', status: 'success'},
    { id: '6', DateTime: '03/03/2023', Sell_Name: 'Tianjin', status: 'success'},
    { id: '7', DateTime: '03/03/2023', Sell_Name: 'Fujian', status: 'success'},
    { id: '8', DateTime: '03/03/2023', Sell_Name: 'Chongqing', status: 'success'},
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

export default RequestDefault;