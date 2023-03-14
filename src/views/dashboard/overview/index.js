import { useEffect, useState } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from './card-statistics'

// ** Styled Component Import
import ApexChartWrapper from './react-apexcharts'

// ** Demo Components Imports
import Table from './Table'
import Trophy from './Trophy'
import TotalEarning from './TotalEarning'
import StatisticsCard from './StatisticsCard'
import WeeklyOverview from './WeeklyOverview'
import DepositWithdraw from './DepositWithdraw'
import SalesByCountries from './SalesByCountries'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const gridSpacing = 3

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <StatisticsCard isLoading={isLoading} />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Trophy isLoading={isLoading} />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} xs={12} md={6} lg={12}>
                            <WeeklyOverview isLoading={isLoading} />
                        </Grid>
                        <Grid item sm={6} xs={12} md={6} lg={12}>
                            <SalesByCountries isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={8}>
                    <DepositWithdraw isLoading={isLoading} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Table isLoading={isLoading} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    );
};

export default Dashboard;
