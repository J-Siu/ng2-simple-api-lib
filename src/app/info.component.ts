import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
	'selector': 'info-component',
	'template': `
		<h3>{{title}}</h3>
		<p>Info api is setup in api.service.ts</p>
		<p>API Url: /info/date</p>
		<div><button (click)="getDate()">Get Date</button>{{date}}</div>
		<p>API Url: /info/time</p>
		<div><button (click)="getTime()">Get Time</button>{{time}}</div>
		`
})
export class InfoComponent {
	title = 'Info API';

	date='';
	time='';

	constructor(private as: ApiService) { }

	getDate() {
		this.as.info.call('date', '', r => this.date = r);
	}
	getTime() {
		this.as.info.call('time', '', r => this.time = r);
	}

	// Use default error handler
}
