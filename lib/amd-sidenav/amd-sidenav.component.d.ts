import { AmdSidenavService } from './amd-sidenav.service';
export declare class AmdSidenavComponent {
    sidenavId: string;
    private amdSidenavService;
    private isOpen;
    constructor(amdSidenavService: AmdSidenavService);
    toggleSidenav(): void;
    openSidenav(): void;
    closeSidenav(): void;
}
