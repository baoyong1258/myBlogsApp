import fetch from '../utils/fetch';

export const getData = () => fetch('https://api.github.com/repos/zeit/next.js', {}, 'GET');

export const getSidebarDate = () => fetch('http://localhost:8088/getData', {}, 'GET');
