import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'amd-dialog',
	template: require('./amd-dialog.component.html'),
	styles: [ require('./amd-dialog.component.scss') ],
	encapsulation: ViewEncapsulation.Native
})
export class AmdDialogComponent { 

	public isOpen: boolean;

	constructor() {
		this.isOpen = true;
	}

	public closeModal(): void {
		this.isOpen = false;
	}

}
