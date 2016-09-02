import { Component, Input } from '@angular/core';
import { AmdSidenavService } from './amd-sidenav.service';

@Component({
	selector: 'amd-sidenav',
	template: require('./amd-sidenav.component.html'),
	styles: [require('./amd-sidenav.component.scss')]
})
export class AmdSidenavComponent {

	@Input() public sidenavId: string;

	private amdSidenavService: AmdSidenavService;
	private isOpen: boolean;

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
