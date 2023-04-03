// assets
import { IconTransferIn,IconTransitionBottom } from '@tabler/icons';

// constant
const icons = { IconTransferIn,IconTransitionBottom };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const transaction = {
    id: 'transaction',
    title: 'Transaction',
    type: 'group',
    children: [
        {
            id: 'request',
            title: 'Request',
            type: 'item',
            url:'/transaction/request',
            icon: icons.IconTransitionBottom,
            breadcrumbs: false
        },
        {
            id: 'deals',
            title: 'Deals',
            type: 'item',
            url: '/transaction/deals',
            icon: icons.IconTransferIn,
            breadcrumbs: false
        }
    ]
};

export default transaction;
