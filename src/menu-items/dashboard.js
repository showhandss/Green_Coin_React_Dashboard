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
            id: 'overview',
            title: 'Overview',
            type: 'item',
            url: '/dashboard/overview',
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
                    url: '/login',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/register',
                    target: true
                }
            ]
        }
    ]
};

export default dashboard;
