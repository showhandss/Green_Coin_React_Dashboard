// assets
import { IconZoomMoney, IconReportMoney } from '@tabler/icons';

// constant
const icons = { IconZoomMoney, IconReportMoney };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const partners = {
    id: 'partners',
    title: 'Partners',
    type: 'group',
    children: [
        {
            id: 'issuers',
            title: 'Issuers',
            type: 'item',
            url: '/users/issuers',
            icon: icons.IconZoomMoney,
            breadcrumbs: false
        },
        {
            id: 'bookrunners',
            title: 'Bookrunners',
            type: 'item',
            url: '/users/bookrunners',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        }
    ]
};

export default partners;
