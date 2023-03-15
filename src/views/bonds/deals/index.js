import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const DealsDefault = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Dealer ID', width: 130 },
    { field: 'DateTime', headerName: 'Date Time', width: 130 },
    { field: 'Sell_ID', headerName: 'Seller ID', width: 130 },
    { field: 'Sell_Name', headerName: 'Seller Name', width: 130 },
    { field: 'Buy_ID', headerName: 'Buyer ID', width: 130 },
    { field: 'Buy_Name', headerName: 'Buyer Name', width: 130 },
    { field: 'Price', headerName: 'Price', width: 130 },
    { field: 'Volume', headerName: 'Volume', width: 130 },
    { field: 'Transform', headerName: 'Transform', width: 130 },
  ];
  
  const rows = [
    { id: 'EA01', DateTime: '03/03/2023', Sell_ID: '56964462', Sell_Name: 'Guangzhou', Buy_ID: '54962265', Buy_Name:'Aiden', Price:'2.1', Volume:'100', Transform:'Cash' },
    { id: 'EA02', DateTime: '03/03/2023', Sell_ID: '56964463', Sell_Name: 'Shenzhen', Buy_ID: '54962266', Buy_Name:'Bella', Price:'3.1', Volume:'200', Transform:'eCheck' },
    { id: 'EA03', DateTime: '03/03/2023', Sell_ID: '56964464', Sell_Name: 'Beijing', Buy_ID: '54962267', Buy_Name:'Charlie', Price:'4.1', Volume:'300', Transform:'Cash' },
    { id: 'EA04', DateTime: '03/03/2023', Sell_ID: '56964465', Sell_Name: 'Shanghai', Buy_ID: '54962268', Buy_Name:'Daisy', Price:'5.1', Volume:'400', Transform:'eCheck' },
    { id: 'EA05', DateTime: '03/03/2023', Sell_ID: '56964466', Sell_Name: 'Hubei', Buy_ID: '54962269', Buy_Name:'Ella', Price:'6.1', Volume:'500', Transform:'Cash' },
    { id: 'EA06', DateTime: '03/03/2023', Sell_ID: '56964467', Sell_Name: 'Tianjin', Buy_ID: '54962270', Buy_Name:'Frank', Price:'7.1', Volume:'600', Transform:'eCheck' },
    { id: 'EA07', DateTime: '03/03/2023', Sell_ID: '56964468', Sell_Name: 'Fujian', Buy_ID: '54962271', Buy_Name:'Grandpa', Price:'8.1', Volume:'700', Transform:'Cash' },
    { id: 'EA08', DateTime: '03/03/2023', Sell_ID: '56964469', Sell_Name: 'Chongqing', Buy_ID: '54962272', Buy_Name:'Harry', Price:'9.1', Volume:'800', Transform:'eCheck' },
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