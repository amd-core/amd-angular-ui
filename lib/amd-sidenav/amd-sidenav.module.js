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
var core_1 = require('@angular/core');
var amd_sidenav_service_1 = require('./amd-sidenav.service');
var amd_sidenav_component_1 = require('./amd-sidenav.component');
var AmdSidenavModule = (function () {
    function AmdSidenavModule() {
    }
    AmdSidenavModule = __decorate([
        core_1.NgModule({
            exports: [amd_sidenav_component_1.AmdSidenavComponent],
            declarations: [amd_sidenav_component_1.AmdSidenavComponent],
            providers: [amd_sidenav_service_1.AmdSidenavService]
        }), 
        __metadata('design:paramtypes', [])
    ], AmdSidenavModule);
    return AmdSidenavModule;
}());
exports.AmdSidenavModule = AmdSidenavModule;

//# sourceMappingURL=amd-sidenav.module.js.map
