import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const AdminPage = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Admin ID', width: 70 },
    { field: 'FirstName', headerName: 'First name', width: 130 },
    { field: 'LastName', headerName: 'Last name', width: 130 },
    { field: 'Position', headerName: 'Position', width: 200 },
    { field: 'Search', headerName: 'Search', width: 70 },
    { field: 'Add', headerName: 'Add', width: 70 },
    { field: 'Delete', headerName: 'Delete', width: 70 },
    { field: 'Change', headerName: 'Change', width: 70 },
  ];

  const rows = [
    { id: 1, LastName: 'Mok', FirstName: 'Fanny', Position: 'Project manager', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 2, LastName: 'Li', FirstName: 'Jerry', Position: 'Developer', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 3, LastName: 'Tang', FirstName: 'Halo', Position: 'Developer', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 4, LastName: 'Li', FirstName: 'Lyranda', Position: 'Data analyst', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 5, LastName: 'Deng', FirstName: 'Daniel', Position: 'Test engineer', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 6, LastName: 'Ma', FirstName: 'Austin', Position: 'Maintenance', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 7, LastName: 'Wong', FirstName: 'Victor', Position: 'Assessing', Search: '+', Add: '+', Delete: '+', Change: '+'},
    { id: 8, LastName: 'AL', FirstName: 'Alfrdli', Position: 'Inverstor', Search: '+', Add: '+', Delete: '+', Change: '+'},
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

export default AdminPage;