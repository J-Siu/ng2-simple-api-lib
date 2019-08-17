import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SimpleApiClient {

	private apiObjArray: SimpleApiObj[] = [];

	constructor(private http: HttpClient) { }

	get(baseUrl: string = '/'): SimpleApiObj {

		if (!this.apiObjArray[baseUrl]) {
			this.apiObjArray[baseUrl] = new SimpleApiObj(baseUrl, this.http);
		}
		return this.apiObjArray[baseUrl];
	}

	list(): string[] {
		return Object.keys(this.apiObjArray);
	}
}

export class SimpleApiObj {
	private errorHandler: (error: any) => void;
	private baseUrl;

	constructor(url: string, private http: HttpClient) {
		this.errorHandler = this.defaultErrorHandler;
		this.baseUrl = url;
	}

	setErrorHandler(handler: (error: any) => void) {
		this.errorHandler = handler;
	}

	call(
		method: string,	// Name of api
		params: any, // Argument of api
		callback: (result: any) => void,
		errorHandler: (error: any) => void = this.errorHandler) {

		let headers = new HttpHeaders().set('Content-Type','application/json');
		//let options = new RequestOptions({ 'headers': headers });
		let url = Location.joinWithSlash(this.baseUrl, method);
		this.http
			.post<any>(url, JSON.stringify({ params: params }), {headers})
			.pipe(tap(r => { if (r.error) { throw r.error; } }))
			.subscribe(i => callback(i.result), errorHandler);
	}

	private defaultErrorHandler(error: any) {
		//let errMsg = (error.message) ? error.message :
		//	error.status ? `${error.status} - ${error.statusText}` : 'Web Server error';
		console.error('SimpleApi: Error: ' + JSON.stringify(error));
	}
}
