// assets
import { IconReportMoney, IconUsers, IconKey } from '@tabler/icons';

// constant
const icons = { IconReportMoney, IconUsers, IconKey };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'customer',
            title: 'Customers',
            type: 'item',
            url: '/dashboard/customers',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'investment',
            title: 'Investment',
            type: 'item',
            url: '/dashboard/investments',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default dashboard;
