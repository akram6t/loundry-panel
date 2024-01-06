const  routes = {

    DASHBOARD: '/',

    CUSTOMERS: '/customers',
    CUSTOMERS_CREATE: '/customers/create',
    CUSTOMERS_EDIT: '/customers/:uid',

    ORDER_CREATE: '/order/create',
    ORDER_DETAILS: '/orders/:order_id',
    ORDERS: '/orders',

    SERVICES: '/services',
    SERVICES_EDIT: '/service/edit/:id',
    SERVICES_CREATE: '/service/create',
    SERVICES_TYPE:'/service/type',
    
    ADDONS: '/addons',

    EXPENSES: '/expenses',
    EXPENSES_CATEGORY: '/expense/category',

    ORDERS_REPORT: '/orders_report',
    SALES_REPORT: '/sales_report',
    EXPENSES_REPORT: '/expenses_report',

    MEDIA: '/media',
    APPLICATION_SETTINGS: '/application',
    GENERAL_SETTINGS: '/general',
    PROFILE_SETTINGS: '/profile',

    TC: '/tc',
    BANNERS: '/banners',
    ORDERS_STATUS: '/os',
    DATE_TIMING: '/date_time',

    LOGIN: '/auth/login',
    NOTIFICATIONS: '/notifications',
    MESSAGES: '/messages'

}

// export const BASE_URL = 'http://localhost:5000';
export const BASE_URL = 'https://fixed-swamp-lingonberry.glitch.me';

const URL_GET_LIST = (params) => {
    const queryParams = new URLSearchParams(params);
    return `${BASE_URL}/admin/apis/get_list?${queryParams}`
}

export const URL_DELETE_DOCUMENT = `${BASE_URL}/admin/apis/delete_document`;

export const URL_POST_DOCUMENT = `${BASE_URL}/admin/apis/post_data`;


export const URL_POST_NOTIFICATION = `${BASE_URL}/admin/apis/post_notification`;

export const URL_GET_ORDERS__STATUS_COUNT = `${BASE_URL}/admin/apis/orders_status_count`;
export const URL_POST_MEDIA = `${BASE_URL}/admin/apis/add_media`;

export const DATE_ACC_DESC = {
    ACCENDING: 1,
    DECENDING: -1
}

export const sampleIcon = 'https://logo.com/image-cdn/images/kts928pd/production/4b1820dbc4ce86b445e7206c00756e955ec9c080-347x342.png?w=640&q=72';


export const Collections = {
    USERS: 'users',
    ORDERS: 'orders',
    ADDONS: 'addons',
    TC: 'tc',
    ADDRESSES: 'addresses',
    BANNERS: 'banners',
    EXPENSES: 'expenses',
    EXPENSES_CATEGORY: 'expense_category',
    NOTIFICATIONS: 'notifications',
    ORDERS_STATUS: 'orderstatus',
    ORDERS_TIMING: 'ordertiming',
    PRODUCTS: 'products',
    SERVICES: 'services',
    STORE: 'shop',
    MEDIA: 'media',
    PAYMENTS: 'payments',
    ADMIN: 'admin'
}

export {routes, URL_GET_LIST};
