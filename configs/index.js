const dev = process.env.NODE_ENV !== 'production';
let apiPrefix;
if(dev){
    apiPrefix = 'http://localhost:8088';
}else {
    apiPrefix = 'http://111.231.59.59:8088';
}
export default {
    apiPrefix: apiPrefix
}