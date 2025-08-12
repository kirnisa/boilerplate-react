import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';
import DrugsPage from './DrugsPage';
import SubscribesPage from './SubscribesPage';
import PurchasesPage from './PurchasesPage';
import UsersPage from './UsersPage';
import CustomersPage from './CustomersPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_DRUGS = 'drugs';
export const ROUTE_SUBSCRIBES = 'subscribes';
export const ROUTE_USERS = 'users';
export const ROUTE_PURCHASES = 'purchases';
export const ROUTE_CUSTOMERS = 'customers';




export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: [null],
    items: {
        [ROUTE_DRUGS]: {
            label:__('Препараты'),
            path: '/drugs',
            component: DrugsPage,
            roles: ['user'],
            items: {}
        },
        [ROUTE_SUBSCRIBES]: {
            label: __('Подписка'),
            path: '/subscribes',
            component: SubscribesPage,
            roles: ['user'],
            items: {}
        },
         [ROUTE_PURCHASES]: {
            label:__('Покупка'),
            path: '/purchases',
            component: PurchasesPage,
            roles: ['user'],
            items: {}
        },
         [ROUTE_USERS]: {
            label:__('Пользователи'),
            path: '/users',
            component: UsersPage,
            roles: ['user'],
            items: {}
        },
         [ROUTE_CUSTOMERS]: {
            label:__('Покупатели'),
            path: '/customers',
            component: CustomersPage,
            roles: ['user'],
            items: {}
        }
        
    }
} as IRouteItem;
