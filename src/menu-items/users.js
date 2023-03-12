// assets
import { IconUser, IconUsers } from '@tabler/icons';

// constant
const icons = { IconUser, IconUsers };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'admin',
            title: 'Admin',
            type: 'item',
            url: '/users/admin',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'project-owner',
            title: 'Project Owner',
            type: 'item',
            url: '/users/project-owner',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'customer',
            title: 'Customer',
            type: 'item',
            url: '/users/customer',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default users;
