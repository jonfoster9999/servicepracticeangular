import { RouterModule, Routes } from '@angular/router'
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ErrorComponent } from './error/error.component'
import { NgModule } from '@angular/core';
import { Auth } from './auth.service'

const appRoutes = [
	{ path: "one", canActivate: [Auth], component: OneComponent },
	{ path: "two",  component: TwoComponent },
	{ path: "error", component: ErrorComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutes {}