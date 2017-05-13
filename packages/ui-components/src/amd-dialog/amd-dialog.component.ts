import { Component } from '@angular/core';

@Component({
	selector: 'amd-dialog',
	templateUrl: './amd-dialog.component.html'
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
