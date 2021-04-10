import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { SimpleApiClient } from 'simple-api-client-ng2';

//import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DataComponent } from './data.component';
import { DemoComponent } from './demo.component';
import { ErrorComponent } from './error.component';
import { InfoComponent } from './info.component';
import { HomeComponent } from './home.component';

import { ApiService } from './api.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule
	//	routing
	],
	declarations: [
		AppComponent,
		DataComponent,
		DemoComponent,
		ErrorComponent,
		InfoComponent,
		HomeComponent
	],
	providers: [
		ApiService,
		SimpleApiClient
	],
	bootstrap: [AppComponent]
})
export class AppModule { }