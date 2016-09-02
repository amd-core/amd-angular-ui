import { Component, ViewEncapsulation } from '@angular/core';

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
}
