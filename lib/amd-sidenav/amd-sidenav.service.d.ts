import { Observable } from 'rxjs/Observable';
export declare class AmdSidenavService {
    sidenavToggled: Observable<string>;
    sidenavOpened: Observable<string>;
    sidenavClosed: Observable<string>;
    private sidenavToggledSource;
    private sidenavOpenedSource;
    private sidenavClosedSource;
    constructor();
    toggle(sidenavId: string): void;
    open(sidenavId: string): void;
    close(sidenavId: string): void;
}
