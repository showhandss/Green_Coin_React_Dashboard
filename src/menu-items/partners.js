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
            url: '/partners/issuers',
            icon: icons.IconZoomMoney,
            breadcrumbs: false
        },
        {
            id: 'bookrunners',
            title: 'Bookrunners',
            type: 'item',
            url: '/partners/bookrunners',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        }
    ]
};

export default partners;
