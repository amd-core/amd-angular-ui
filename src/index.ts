import { NgModule } from '@angular/core';
import { AmdFormModule } from './amd-form';
import { AmdSidenavModule, AmdSidenavService } from './amd-sidenav';
import { AmdDialogModule } from './amd-dialog';

@NgModule({
	imports: [
		AmdFormModule, AmdSidenavModule,
		AmdDialogModule
	],
	exports: [
		AmdFormModule, AmdSidenavModule,
		AmdDialogModule
	], 
	providers: [ AmdSidenavService ]
})
export class AmdNg2UiModule { }

export * from './amd-dialog';
export * from './amd-form';
export * from './amd-sidenav';
