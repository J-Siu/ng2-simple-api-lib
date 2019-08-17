import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
	'selector': 'app-root',
	'template': `
		<h3>{{title}}</h3>
		<a class="border" routerLink="/home">Home</a>
		<a class="border" routerLink="/demo">Demo API</a>
		<a class="border" routerLink="/info">Info API</a>
		<a class="border" routerLink="/data">Data API</a>
		<a class="border" routerLink="/error">Error Handling</a>
		<router-outlet></router-outlet>`,
	'styles': [`
		.border {
			padding: 1px;
			margin: 1px;
			border: solid;
			border-width: 1px;
			border-collapse: collapse;
		}`]
})
export class AppComponent {
	title = 'Angular Simple Api Example';

	constructor(private as: ApiService) { }

}
