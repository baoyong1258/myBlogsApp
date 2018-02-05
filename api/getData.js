import fetch from '../utils/fetch';

export const getData = () => fetch('/getData', {}, 'GET');

export const getSidebarDate = () => fetch('/sidebar/getSidebarData', {}, 'GET');

export const addSidebarDate = (newSidebarData) => fetch('/sidebar/addSidebarData', {newSidebarData}, 'POST');
