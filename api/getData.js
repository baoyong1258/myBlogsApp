import fetch from '../utils/fetch';

export const getData = () => fetch('/getData', {}, 'GET');

export const getSidebarDate = () => fetch('/getSidebarList', {}, 'GET');
