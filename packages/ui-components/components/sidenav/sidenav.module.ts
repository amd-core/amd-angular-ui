import { NgModule } from '@angular/core';

import { AmdSidenavService } from './sidenav.service';
import { AmdSidenavComponent } from './sidenav.component';

@NgModule({
	exports: [AmdSidenavComponent],
	declarations: [AmdSidenavComponent],
	providers: [AmdSidenavService]
})
export class AmdSidenavModule { }
