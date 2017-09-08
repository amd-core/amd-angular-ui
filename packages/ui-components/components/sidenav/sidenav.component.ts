import { Component, Input } from '@angular/core';

import { AmdSidenavService } from './sidenav.service';

@Component({
	selector: 'amd-sidenav',
	templateUrl: './sidenav.component.html'
})
export class AmdSidenavComponent {
	@Input() public sidenavId: string;
	public isOpen: boolean;

	private amdSidenavService: AmdSidenavService;

	constructor(amdSidenavService: AmdSidenavService) {
		this.amdSidenavService = amdSidenavService;
		this.isOpen = false;

		this.amdSidenavService.sidenavToggled.subscribe((sidenavId: string) => {
			if (sidenavId === this.sidenavId) {
				this.toggleSidenav();
			}
		});

		this.amdSidenavService.sidenavOpened.subscribe((sidenavId: string) => {
			if (sidenavId === this.sidenavId) {
				this.openSidenav();
			}
		});

		this.amdSidenavService.sidenavClosed.subscribe((sidenavId: string) => {
			if (sidenavId === this.sidenavId) {
				this.closeSidenav();
			}
		});
	}

	public toggleSidenav(): void {
		this.isOpen = !this.isOpen;
	}

	public openSidenav(): void {
		this.isOpen = true;
	}

	public closeSidenav(): void {
		this.isOpen = false;
	}
}
