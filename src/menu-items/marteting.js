// assets
import { IconMessage, IconBell, IconNotification } from '@tabler/icons';

// constant
const icons = { IconMessage, IconBell, IconNotification };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const marketing = {
    id: 'marketing',
    title: 'Marketing',
    type: 'group',
    children: [
        {
            id: 'contents',
            title: 'Contents',
            type: 'item',
            url: '/marketing/contents',
            icon: icons.IconMessage,
            breadcrumbs: false
        },
        {
            id: 'popups',
            title: 'Popups',
            type: 'item',
            url: '/marketing/popups',
            icon: icons.IconBell,
            breadcrumbs: false
        },
        {
            id: 'notifications',
            title: 'Notifications',
            type: 'item',
            url: '/marketing/notifications',
            icon: icons.IconNotification,
            breadcrumbs: false
        }
    ]
};

export default marketing;
