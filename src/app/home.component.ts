import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
	'selector': 'home-component',
	'template': `
		<h3>{{title}}</h3>
		<p>List of API Objects:</p>
		<p>{{api}}</p>`
})
export class HomeComponent implements OnInit {
	title = 'Home';

	api: string = '';
	constructor(private as: ApiService) { }

	ngOnInit() {
		this.api = JSON.stringify(this.as.list());
	}

}
