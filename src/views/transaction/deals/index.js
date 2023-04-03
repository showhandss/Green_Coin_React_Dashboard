import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const DealsDefault = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Project ID', width: 130 },
    { field: 'Start_Time', headerName: 'Start Time', width: 130 },
    { field: 'End_Time', headerName: 'End Time', width: 130 },
    { field: 'region', headerName: 'Region', width: 130 },
    { field: 'credit', headerName: 'Carbon Credit', width: 130 },
    { field: 'Wallet_add', headerName: 'Wallet Address', width: 130 },
  ];
  
  const rows = [
    { id: '1', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Guangzhou', credit: '100', Wallet_add:'54962265'},
    { id: '2', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Shenzhen', credit: '200', Wallet_add:'54962266'},
    { id: '3', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Beijing', credit: '300', Wallet_add:'54962267'},
    { id: '4', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Shanghai', credit: '400', Wallet_add:'54962268'},
    { id: '5', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Hubei', credit: '500', Wallet_add:'54962269'},
    { id: '6', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Tianjin', credit: '400', Wallet_add:'54962270'},
    { id: '7', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Fujian', credit: '300', Wallet_add:'54962271'},
    { id: '8', Start_Time: '03/03/2023', End_Time: '03/04/2023', region: 'Chongqing', credit: '200', Wallet_add:'54962272'},
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

export default DealsDefault;