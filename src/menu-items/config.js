// assets
import { IconSettings } from '@tabler/icons';

// constant
const icons = { IconSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const config = {
    id: 'config',
    title: 'Config',
    type: 'group',
    children: [
        {
            id: 'configurations',
            title: 'Configurations',
            type: 'item',
            url: '/dashboard/config',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default config;
