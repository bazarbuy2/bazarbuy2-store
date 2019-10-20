import bazarbuyClient from 'bazarbuy2-client';
import clientSettings from './settings';

const api = new bazarbuyClient({
	ajaxBaseUrl: clientSettings.ajaxBaseUrl || '/ajax'
});

export default api;
