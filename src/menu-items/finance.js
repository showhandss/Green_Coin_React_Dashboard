// assets
import { IconTransitionBottom } from '@tabler/icons';

// constant
const icons = { IconTransitionBottom };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const finance = {
    id: 'finance',
    title: 'Finance',
    type: 'group',
    children: [
        {
            id: 'requests',
            title: 'Requests',
            type: 'item',
            url: '/dashboard/requests',
            icon: icons.IconTransitionBottom,
            breadcrumbs: false
        }
    ]
};

export default finance;
