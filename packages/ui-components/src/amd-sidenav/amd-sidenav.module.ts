import { NgModule } from '@angular/core';

import { AmdSidenavService } from './amd-sidenav.service';
import { AmdSidenavComponent } from './amd-sidenav.component';

@NgModule({
	exports: [AmdSidenavComponent],
	declarations: [AmdSidenavComponent],
	providers: [AmdSidenavService]
})
export class AmdSidenavModule { }
