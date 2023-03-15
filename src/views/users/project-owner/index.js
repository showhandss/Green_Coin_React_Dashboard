import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DataTable from 'ui-component/Table';
import Card from '@mui/material/Card';

const ProjectOwnerPage = () => {
  const [isLoading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id', headerName: 'Project Owner ID', width: 130 },
    { field: 'region', headerName: 'Region', width: 130 },
    { field: 'projectid', headerName: 'Project ID', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'declaredno', headerName: 'Declared Coin', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'availableno', headerName: 'Available Coin', width: 130 },
  ];
  
  const rows = [
    { id: 1, region: 'Beijing', projectid: 8, date: '2023/3/1', declaredno: 100, status: 'pending', availableno: 0},
    { id: 2, region: 'Shanghai', projectid: 7, date: '2023/2/20', declaredno: 500, status: 'pending', availableno: 0},
    { id: 3, region: 'Shenzhen', projectid: 6, date: '2023/2/8', declaredno: 200, status: 'pending', availableno: 0},
    { id: 4, region: 'Tianjin', projectid: 5, date: '2023/2/2', declaredno: 50, status: 'failed', availableno: 0},
    { id: 5, region: 'Guangdong', projectid: 4, date: '2023/1/9', declaredno: 1000, status: 'success', availableno: 1000},
    { id: 6, region: 'Hubei', projectid: 3, date: '2023/12/22', declaredno: 100, status: 'success', availableno: 100},
    { id: 7, region: 'Chongqing', projectid: 2, date: '2022/12/14', declaredno: 500, status: 'success', availableno: 300},
    { id: 8, region: 'Fujian', projectid: 1, date: '2022/12/1', declaredno: 300, status: 'success', availableno: 50}
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