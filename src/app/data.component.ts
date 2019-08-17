import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
	'selector': 'data-component',
	'template': `
		<h3>{{title}}</h3>
		<p>Data api is setup in api.service.ts</p>
		<p>API Url: /data/num</p>
		<div><button (click)="num()">Get random number</button>{{replyNum}}</div>
		<p>API Url: /data/str</p>
		<div><button (click)="str()">Get random string</button>{{replyStr}}</div>
		<p>API Url: /data/obj</p>
		<div><button (click)="obj()">Get random object</button><pre>{{replyObj}}</pre></div>`
})
export class DataComponent {
	title = 'Data API';

	replyNum = '';
	replyObj = '';
	replyStr = '';

	constructor(private as: ApiService) { }

	num() {
		this.as.data.call('num', '', r => this.replyNum = r);
	}

	obj() {
		this.as.data.call('obj', '', r => this.replyObj = JSON.stringify(r, null, 2));
	}

	str() {
		this.as.data.call('str', '', r => this.replyStr = r);
	}
}
