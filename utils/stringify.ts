import Stringfy from 'json-stringify-safe';
const storeData = (data: object) => Stringfy(data, null, 0);

export default storeData;
