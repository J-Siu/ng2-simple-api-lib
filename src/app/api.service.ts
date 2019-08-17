import {Injectable} from '@angular/core';
import {SimpleApiClient, SimpleApiObj} from 'simple-api-client-ng2';

@Injectable()
export class ApiService {
	data: SimpleApiObj;
	demo: SimpleApiObj;
	info: SimpleApiObj;
	constructor(private api: SimpleApiClient) {
		this.demo = this.api.get('/demo');

		this.info = this.api.get('/info');

		this.data = this.api.get('/data');
	}

	list() {
		return this.api.list();
	}
}