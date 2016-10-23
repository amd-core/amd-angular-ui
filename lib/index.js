"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var amd_form_1 = require('./amd-form');
var amd_sidenav_1 = require('./amd-sidenav');
var amd_dialog_1 = require('./amd-dialog');
var AmdNg2UiModule = (function () {
    function AmdNg2UiModule() {
    }
    AmdNg2UiModule = __decorate([
        core_1.NgModule({
            imports: [
                amd_form_1.AmdFormModule, amd_sidenav_1.AmdSidenavModule,
                amd_dialog_1.AmdDialogModule
            ],
            exports: [
                amd_form_1.AmdFormModule, amd_sidenav_1.AmdSidenavModule,
                amd_dialog_1.AmdDialogModule
            ],
            providers: [amd_sidenav_1.AmdSidenavService]
        }), 
        __metadata('design:paramtypes', [])
    ], AmdNg2UiModule);
    return AmdNg2UiModule;
}());
exports.AmdNg2UiModule = AmdNg2UiModule;
__export(require('./amd-dialog'));
__export(require('./amd-form'));
__export(require('./amd-sidenav'));

//# sourceMappingURL=index.js.map
