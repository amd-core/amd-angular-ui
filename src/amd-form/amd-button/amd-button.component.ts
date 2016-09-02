import { Component, OnInit } from '@angular/core';

let AmdButtonComponentTemplate: string = require('./amd-button.component.html');

@Component({
	selector: 'amd-button',
	template: AmdButtonComponentTemplate,
	styles: [require('./amd-button.component.scss')]
})
export class AmdButtonComponent implements OnInit {
	
	constructor() {
		// todo
	}

	public ngOnInit(): void {
		// todo
	}

}
