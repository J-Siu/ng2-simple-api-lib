import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
	'selector': 'demo-component',
	'template': `
		<h3>{{title}}</h3>
		<p>Demo api is setup in api.service.ts</p>
		<p>API Url: /demo/echo</p>
		<div><input [(ngModel)]="echoMsg1"><button (click)="echo1()">Echo</button></div>
		<div>Reply: {{echoReply1}}</div>
		<p>API Url: /demo/echo2</p>
		<div><input [(ngModel)]="echoMsg2"><button (click)="echo2()">Echo2</button></div>
		<div>Reply: {{echoReply2}}</div>
		`
})
export class DemoComponent {
	title = 'Demo API';

	echoMsg1 = '';
	echoMsg2 = '';
	echoReply1 = '';
	echoReply2 = '';

	constructor(private as: ApiService) { }

	echo1() {
		this.as.demo.call('echo', this.echoMsg1, r => this.echoReply1 = r);
	}
	echo2() {
		this.as.demo.call('echo2', this.echoMsg2, r => this.echoReply2 = r);
	}
}
