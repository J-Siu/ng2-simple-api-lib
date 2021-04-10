//import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data.component';
import { DemoComponent } from './demo.component';
import { ErrorComponent } from './error.component';
import { InfoComponent } from './info.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'data',
		component: DataComponent
	},
	{
		path: 'demo',
		component: DemoComponent
	},
	{
		path: 'error',
		component: ErrorComponent
	},
	{
		path: 'info',
		component: InfoComponent
	},
		{
		path: '',
		component: HomeComponent
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
