// assets
import { IconFileChart, IconFileCheck, IconBrandTabler } from '@tabler/icons';

// constant
const icons = { IconFileChart, IconFileCheck, IconBrandTabler };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const log = {
    id: 'log',
    title: 'Log',
    type: 'group',
    children: [
        {
            id: 'userlogs',
            title: 'User Logs',
            type: 'item',
            url: '/dashboard/userlogs',
            icon: icons.IconFileChart,
            breadcrumbs: false
        },
        {
            id: 'adminlogs',
            title: 'Admin Logs',
            type: 'item',
            url: '/dashboard/adminlogs',
            icon: icons.IconFileCheck,
            breadcrumbs: false
        },
        {
            id: 'blockchainlogs',
            title: 'Blockchain Logs',
            type: 'item',
            url: '/dashboard/blockchainlogs',
            icon: icons.IconBrandTabler,
            breadcrumbs: false
        }
    ]
};

export default log;
