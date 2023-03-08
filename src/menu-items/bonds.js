// assets
import { IconTransferIn } from '@tabler/icons';

// constant
const icons = { IconTransferIn };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const bonds = {
    id: 'bonds',
    title: 'Bonds',
    type: 'group',
    children: [
        {
            id: 'deals',
            title: 'Deals',
            type: 'item',
            url: '/bonds/deals',
            icon: icons.IconTransferIn,
            breadcrumbs: false
        }
    ]
};

export default bonds;
