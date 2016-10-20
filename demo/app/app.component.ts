import { Component, ViewEncapsulation } from '@angular/core';
import { AmdSidenavService } from '../amd-sidenav';

let AppComponentTemplate: string = require('./app.component.html');

@Component({
	selector: 'amd-app',
	template: AppComponentTemplate,
	styles: [require('./app.component.scss')],
	encapsulation: ViewEncapsulation.Native
})
export class AmdAppComponent {
	public message: string = undefined;
	public messageErrorMessages: any = [
		{
			key: 'required',
			value: 'This field is required'
		},
		{
			key: 'minlength',
			value: 'This field has a minlength of 3'
		}
	];

	private amdSidenavService: AmdSidenavService;

	constructor(amdSidenavService: AmdSidenavService) {
		this.amdSidenavService = amdSidenavService;
	}

	public toggleSidenav(): void {
		this.amdSidenavService.toggle('sidenav');
	}

	public openSidenav(): void {
		this.amdSidenavService.open('sidenav');
	}

	public closeSidenav(): void {
		this.amdSidenavService.close('sidenav');
	}
}