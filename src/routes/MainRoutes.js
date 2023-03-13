import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const CustomerDefault = Loadable(lazy(() => import('views/dashboard/customers')));
const InvestmentDefault = Loadable(lazy(() => import('views/dashboard/investments')));

// users routing
const AdminDefault = Loadable(lazy(() => import('views/users/admin')));
const ProjectOwnerDefault = Loadable(lazy(() => import('views/users/project-owner')));
// bonds routing
const DealsDefault = Loadable(lazy(() => import('views/bonds/deals')));
// partners routing
const IssuersDefault = Loadable(lazy(() => import('views/partners/issuers')));
const BookrunnersDefault = Loadable(lazy(() => import('views/partners/bookrunners')));
// log routing
const UserlogDefault = Loadable(lazy(() => import('views/log/userlogs')));
const AdminlogDefault = Loadable(lazy(() => import('views/log/adminlogs')));
const BlockchainlogDefault = Loadable(lazy(() => import('views/log/blockchainlogs')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                },
                {
                    path: 'customers',
                    element: <CustomerDefault />
                },
                {
                    path: 'investments',
                    element: <InvestmentDefault />
                }
            ]
        },
        {
            path: 'users',
            children: [
                {
                    path: 'admin',
                    element: <AdminDefault />
                },
                {
                    path: 'project-owner',
                    element: <ProjectOwnerDefault />
                },
                {
                    path: 'customer',
                    element: <CustomerDefault />
                }
            ]
        },
        {
            path: 'bonds',
            children: [
                {
                    path: 'deals',
                    element: <DealsDefault />
                }
            ]
        },
        {
            path: 'partners',
            children: [
                {
                    path: 'issuers',
                    element: <IssuersDefault />
                },
                {
                    path: 'bookrunners',
                    element: <BookrunnersDefault />
                }
            ]
        },
        {
            path: 'log',
            children: [
                {
                    path: 'userlogs',
                    element: <UserlogDefault />
                },
                {
                    path: 'adminlogs',
                    element: <AdminlogDefault />
                },
                {
                    path: 'blockchainlogs',
                    element: <BlockchainlogDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
